const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate form data
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields.",
      });
    }

    // Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact - ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.status(200).json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Email Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message.",
    });
  }
});

module.exports = router;