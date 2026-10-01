const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio backend is running",
  });
});

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});