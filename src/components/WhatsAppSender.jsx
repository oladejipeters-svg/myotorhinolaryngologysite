import React from "react";

const WhatsAppSender = ({ phoneNumber, message }) => {
  const sendToWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={sendToWhatsApp}
      style={{
        marginTop: "10px",
        backgroundColor: "#25D366",
        color: "white",
        padding: "10px 16px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Send to WhatsApp
    </button>
  );
};

export default WhatsAppSender;
