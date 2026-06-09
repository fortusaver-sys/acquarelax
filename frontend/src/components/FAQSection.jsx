import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { SectionTag } from "./ui-cdm/Primitives";

const FAQSection = () => {
  const { t } = useLang();
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" data-testid="faq-section" className="py-24 lg:py-32 bg-[#FDFCF0] relative">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <SectionTag color="neutral" testId="faq-tag">{t.faq.tag}</SectionTag>
          <h2 className="mt-6 font-heading text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.05] tracking-tight text-[#2C2C2A] font-medium" data-testid="faq-title">
            {t.faq.title}
          </h2>
        </div>

        <div className="mt-14 lg:mt-16 divide-y divide-[#AFA393]/20 border-y border-[#AFA393]/20" data-testid="faq-list">
          {t.faq.items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} data-testid={`faq-item-${i}`}>
                <button
                  data-testid={`faq-trigger-${i}`}
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 lg:py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-[17px] lg:text-[20px] tracking-tight text-[#2C2C2A] font-medium group-hover:text-[#5A9BB8] transition-colors">
                    {item.q}
                  </span>
                  <span className={`h-10 w-10 rounded-full border border-[#AFA393]/30 flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-[#2C2C2A] text-[#FDFCF0] border-[#2C2C2A] rotate-180" : "text-[#2C2C2A]"}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p data-testid={`faq-answer-${i}`} className="pb-7 max-w-3xl text-[14px] lg:text-[15px] text-[#5F5E5C] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
