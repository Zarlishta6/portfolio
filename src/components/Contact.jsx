import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";

// =========================
// GITHUB ICON
// =========================
const GitHubIcon = ({ size = 19 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.73 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

// =========================
// LINKEDIN ICON
// =========================
const LinkedInIcon = ({ size = 19 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.37 4.28 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V9H3.56v11.45ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 23.2 24 22.22V1.78C24 .8 23.2 0 22.22 0Z" />
  </svg>
);

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  // =========================
  // CONTACT INFORMATION
  // =========================
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "zarlashtashad6@gmail.com",
      href: "mailto:zarlashtashad6@gmail.com",
    },
    // {
    //   icon: Phone,
    //   label: "Phone",
    //   value: "+92 300 0000000",
    //   href: "tel:+923000000000",
    // },
    {
      icon: MapPin,
      label: "Location",
      value: "Peshawar, Pakistan",
      href: null,
    },
  ];

  // =========================
  // SOCIAL LINKS
  // =========================
  const socialLinks = [
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/zarlashta-s-3a04a5336/",
    },
    {
      icon: GitHubIcon,
      label: "GitHub",
      href: "https://rrg-github-finder.netlify.app/user/Zarlishta6",
    },
  ];

  // =========================
  // FORM SUBMIT
  // =========================
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setStatus("Please fill all fields.");
      return;
    }

    try {
      setIsSending(true);
      setStatus("");

      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to send message."
        );
      }

      setStatus(
        "Your message has been sent successfully."
      );

      form.reset();
    } catch (error) {
      console.error(
        "Contact Form Error:",
        error
      );

      setStatus(
        "Failed to send message. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="contact-container">

        {/* =========================
            SECTION HEADING
        ========================= */}
        <div className="section-heading contact-heading">

          <span className="section-label">
            GET IN TOUCH
          </span>

          <h2>
            Let's work <span>together.</span>
          </h2>

          <p>
            Have a project idea, opportunity, or simply
            want to connect? Feel free to reach out. I
            would be happy to hear from you.
          </p>

        </div>

        {/* =========================
            CONTACT CONTENT
        ========================= */}
        <div className="contact-grid">

          {/* =========================
              LEFT SIDE
          ========================= */}
          <div className="contact-info">

            <div className="contact-info-intro">

              <span className="contact-mini-label">
                CONTACT INFORMATION
              </span>

              <h3>
                Let's start a conversation.
              </h3>

              <p>
                I am always interested in learning,
                collaborating, discussing technology,
                and exploring new opportunities.
              </p>

            </div>

            {/* CONTACT ITEMS */}
            <div className="contact-items">

              {contactItems.map((item) => {
                const Icon = item.icon;

                const content = (
                  <>
                    <div className="contact-item-icon">
                      <Icon size={20} />
                    </div>

                    <div className="contact-item-content">
                      <span>
                        {item.label}
                      </span>

                      <strong>
                        {item.value}
                      </strong>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="contact-item"
                  >
                    {content}

                    <ArrowUpRight
                      size={17}
                      className="contact-item-arrow"
                    />
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="contact-item"
                  >
                    {content}
                  </div>
                );
              })}

            </div>

            {/* =========================
                SOCIAL LINKS
            ========================= */}
            <div className="contact-social-wrapper">

              <span className="contact-mini-label">
                FIND ME ONLINE
              </span>

              <div className="contact-socials">

                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social"
                      aria-label={social.label}
                    >
                      <Icon size={19} />

                      <span>
                        {social.label}
                      </span>

                      <ArrowUpRight size={15} />
                    </a>
                  );
                })}

              </div>

            </div>

          </div>

          {/* =========================
              RIGHT SIDE — FORM
          ========================= */}
          <div className="contact-form-card">

            <div className="contact-form-header">

              <div className="contact-form-icon">
                <Send size={21} />
              </div>

              <div>
                <span>
                  SEND A MESSAGE
                </span>

                <h3>
                  Tell me about your idea.
                </h3>
              </div>

            </div>

            {/* FORM */}
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* NAME */}
              <div className="form-group">

                <label htmlFor="contact-name">
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />

              </div>

              {/* EMAIL */}
              <div className="form-group">

                <label htmlFor="contact-email">
                  Your Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />

              </div>

              {/* MESSAGE */}
              <div className="form-group">

                <label htmlFor="contact-message">
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                  required
                />

              </div>

              {/* STATUS */}
              {status && (
                <p className="contact-form-status">
                  {status}
                </p>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                className="contact-submit"
                disabled={isSending}
              >
                <span>
                  {isSending
                    ? "Sending..."
                    : "Send Message"}
                </span>

                <Send size={17} />
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;