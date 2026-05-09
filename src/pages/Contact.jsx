import { useState } from "react";
import { translations } from "../Data/translations";
import "../App.css";

function Contact({ lang }) {
  const t = translations[lang];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    from_email: "",
    from_name: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage("");

    setTimeout(() => {
      setIsSubmitting(false);

      setStatusMessage(t.contact.success);

      setFormData({
        from_email: "",
        from_name: "",
        subject: "",
        message: "",
      });
    }, 900);
  };

  return (
    <section id="contact" className="section">
      <div className="contact-wrapper">
        <h2 style={{ textAlign: "center" }}>{t.contact.title}</h2>

        <p style={{ textAlign: "center" }} className="contact-desc">
          {t.contact.desc}
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>{t.contact.formTitle}</h3>

          <input
            placeholder={t.contact.email}
            name="from_email"
            type="email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />

          <input
            placeholder={t.contact.name}
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />

          <input
            placeholder={t.contact.subject}
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            placeholder={t.contact.message}
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? t.contact.sending : t.contact.send}
          </button>

          {statusMessage && <div className="form-status">{statusMessage}</div>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
