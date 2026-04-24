import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import WhatsAppSender from "./WhatsAppSender";

export default function Appointment() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsAppMessage, setWhatsAppMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Saves WhatsApp message BEFORE clearing form
      const formattedMessage = `
New Appointment Request
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Date: ${form.date}
Subject: ${form.subject}
Message: ${form.message}
      `;

      setWhatsAppMessage(formattedMessage);

      await emailjs.send(
        "service_joe8s1f", // my service ID
        "template_oijiwni", // my template ID
        form,
        "_o3fL1RzYKp6k5wTC", // my public key
      );

      alert("Appointment request sent successfully.");
      setSubmitted(true);

      // Clear form
      setForm({
        name: "",
        email: "",
        date: "",
        subject: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Email Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="appointment" className="appointment">
      <h2>Book an Appointment</h2>

      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          name="subject"
          type="text"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Leave a message here"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      {submitted && (
        <WhatsAppSender
          phoneNumber="2348039368825" // my WhatsApp number(receiver)
          message={whatsAppMessage}
        />
      )}
    </section>
  );
}
