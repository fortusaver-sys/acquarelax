import React from "react";
import { ArrowRight } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { CTAButton, SectionTag } from "./ui-cdm/Primitives";

const MethodSection = () => {
  const { t } = useLang();

  return (
    <section id="metodo" data-testid="method-section" className="py-24 lg:py-32 bg-[#FDFCF0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl">
          <SectionTag color="water" testId="method-tag">{t.method.tag}</SectionTag>
          <h2 className="mt-6 font-heading text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.05] tracking-tight text-[#2C2C2A] font-medium" data-testid="method-title">
            {t.method.title}
          </h2>
          <p className="mt-6 text-[15px] text-[#5F5E5C] leading-relaxed" data-testid="method-subtitle">
            {t.method.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-14 lg:mt-20 relative" data-testid="method-timeline">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden lg:block absolute top-[34px] left-0 right-0 h-px bg-gradient-to-r from-[#AFA393]/30 via-[#A3CBE0]/60 to-[#AFA393]/30" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative">
            {t.method.steps.map((s, i) => (
              <div
                key={i}
                data-testid={`method-step-${i}`}
                className="relative"
              >
                {/* Node */}
                <div className="relative z-10 inline-flex items-center justify-center h-[68px] w-[68px] rounded-full bg-white border border-[#AFA393]/30 shadow-cdm-sm">
                  <span className="font-heading text-[18px] font-medium text-[#2C2C2A] tracking-tight">{s.number}</span>
                  <span className="absolute -inset-1 rounded-full bg-[#D6E8ED]/40 -z-10 blur-md" />
                </div>
                {/* Content */}
                <div className="mt-6">
                  <h3 className="font-heading text-[20px] lg:text-[22px] tracking-tight text-[#2C2C2A] font-medium">{s.title}</h3>
                  <p className="mt-3 text-[14px] text-[#5F5E5C] leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 lg:mt-20 flex flex-wrap gap-3">
          <CTAButton href="#contatti" variant="primary" testId="method-cta" icon={<ArrowRight size={16} />}>
            {t.method.cta}
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
