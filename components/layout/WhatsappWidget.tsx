"use client";
import React from "react";

const WhatsappWidget: React.FC = () => {
  return (
    <div
      className="position-fixed bottom-0 start-0 m-4"
      style={{ zIndex: 9999 }}
    >
      <a
        href="https://wa.me/966541243428?text=السلام%20عليكم،%20أرغب%20في%20طلب%20صيانة"
        target="_blank"
        rel="noopener noreferrer"
        className="btn whatsapp-btn rounded-circle d-flex align-items-center justify-content-center shadow"
        style={{
          width: "80px",
          height: "80px",
          backgroundColor: "#25D366",
        }}
        aria-label="Chat with Madar Alcon on WhatsApp"
      >
        <i
          className="fa-brands fa-whatsapp"
          style={{ fontSize: "2.2rem", color: "#fff" }}
        ></i>
      </a>

      <style jsx>{`
        .whatsapp-btn {
          transition: all 0.3s ease;
        }

        .whatsapp-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(37, 211, 102, 0.6);
        }
      `}</style>
    </div>
  );
};

export default WhatsappWidget;
