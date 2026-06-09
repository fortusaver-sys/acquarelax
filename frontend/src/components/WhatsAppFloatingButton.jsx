import React, { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { whatsappLink, BRAND } from "../lib/brand";

const WhatsAppFloatingButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      data-testid="whatsapp-floating"
      className={`fixed bottom-6 right-5 z-50 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      }`}
      style={{ marginBottom: "56px" }} /* avoid overlap with emergent badge */
    >
      <div className="flex flex-col items-end gap-3">
        <a
          data-testid="whatsapp-floating-btn"
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scrivici su WhatsApp"
          className="group whatsapp-pulse relative flex items-center gap-3 bg-[#25D366] hover:bg-[#1FB956] text-white pl-5 pr-5 py-3.5 rounded-full shadow-cdm-md hover:shadow-cdm-lg transition-all duration-300 hover:-translate-y-0.5"
        >
          <MessageCircle size={18} />
          <span className="hidden sm:inline text-sm font-medium tracking-wide">WhatsApp</span>
        </a>
        <a
          data-testid="phone-floating-btn"
          href={`tel:${BRAND.phones[0].tel}`}
          aria-label="Chiamaci"
          className="hidden sm:flex items-center gap-2 bg-white border border-[#AFA393]/30 hover:border-[#2C2C2A] text-[#2C2C2A] pl-4 pr-4 py-2.5 rounded-full shadow-cdm-sm transition-all duration-300 hover:-translate-y-0.5 text-[12px] font-medium"
        >
          <Phone size={13} />
          Chiamaci
        </a>
      </div>
    </div>
  );
};

export default WhatsAppFloatingButton;
