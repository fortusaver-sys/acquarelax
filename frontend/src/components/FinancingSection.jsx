import React from "react";
import { CreditCard, Calendar, Wrench, MessageCircle, AlertCircle } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { SectionTag } from "./ui-cdm/Primitives";

const ICONS = [CreditCard, Calendar, Wrench, MessageCircle];

const FinancingSection = () => {
  const { t } = useLang();

  return (
    <section id="finanziamenti" data-testid="financing-section" className="py-24 lg:py-32 bg-[#FDFCF0] relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <SectionTag color="neutral" testId="financing-tag">{t.financing.tag}</SectionTag>
            <h2 className="mt-6 font-heading text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.05] tracking-tight text-[#2C2C2A] font-medium" data-testid="financing-title">
              {t.financing.title}
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] text-[#5F5E5C] leading-relaxed" data-testid="financing-description">
              {t.financing.description}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="p-5 rounded-3xl bg-[#F5F3E9] border border-[#AFA393]/20 flex items-start gap-3" data-testid="financing-note">
              <AlertCircle size={18} className="text-[#AFA393] mt-0.5 shrink-0" />
              <p className="text-[13px] text-[#5F5E5C] leading-relaxed">{t.financing.note}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4" data-testid="financing-badges">
          {t.financing.badges.map((b, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                data-testid={`financing-badge-${i}`}
                className="p-7 rounded-3xl bg-white border border-[#AFA393]/15 hover:border-[#A3CBE0]/60 hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className="h-11 w-11 rounded-2xl bg-[#D6E8ED] flex items-center justify-center text-[#3F7793] group-hover:scale-105 transition">
                  <Icon size={18} />
                </div>
                <p className="mt-6 font-heading text-[18px] text-[#2C2C2A] tracking-tight font-medium">{b}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;
