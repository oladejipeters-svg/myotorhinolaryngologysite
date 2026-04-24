import React from "react";

const WhatsAppSender = ({ phoneNumber, message }) => {
  const sendToWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <button onClick={sendToWhatsApp} style={{ marginTop: "10px" }}>
      Send to WhatsApp
    </button>
  );
};

export default WhatsAppSender;
