import React from "react";
import { Package, Droplets, Bed } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { SectionTag } from "./ui-cdm/Primitives";

const ProblemSection = () => {
  const { t } = useLang();

  const cards = [
    {
      icon: <Package size={20} />,
      title: t.problem.card1Title,
      text: t.problem.card1Text,
      num: "01",
      accent: "bg-[#DCD3C6]",
    },
    {
      icon: <Droplets size={20} />,
      title: t.problem.card2Title,
      text: t.problem.card2Text,
      num: "02",
      accent: "bg-[#D6E8ED]",
    },
    {
      icon: <Bed size={20} />,
      title: t.problem.card3Title,
      text: t.problem.card3Text,
      num: "03",
      accent: "bg-[#AEC0B2]/40",
    },
  ];

  return (
    <section data-testid="problem-section" className="py-24 lg:py-32 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl">
          <SectionTag color="neutral" testId="problem-tag">{t.problem.tag}</SectionTag>
          <h2 className="mt-6 font-heading text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.05] tracking-tight text-[#2C2C2A]">
            {t.problem.title}
            <br />
            <span className="italic text-[#AFA393] font-light">{t.problem.titleAccent}</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] sm:text-base text-[#5F5E5C] leading-relaxed" data-testid="problem-subtitle">
            {t.problem.subtitle}
          </p>
        </div>

        <div className="mt-14 lg:mt-20 grid md:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              data-testid={`problem-card-${i}`}
              className="group relative p-7 lg:p-9 rounded-3xl bg-white border border-[#AFA393]/15 hover:border-[#AFA393]/35 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-start justify-between">
                <div className={`h-12 w-12 rounded-2xl ${c.accent} flex items-center justify-center text-[#2C2C2A] group-hover:scale-105 transition`}>
                  {c.icon}
                </div>
                <span className="font-heading text-[#AFA393]/50 text-[44px] leading-none tracking-tight">{c.num}</span>
              </div>
              <h3 className="mt-10 font-heading text-[22px] lg:text-[24px] tracking-tight text-[#2C2C2A] font-medium">{c.title}</h3>
              <p className="mt-3 text-[14px] text-[#5F5E5C] leading-relaxed">{c.text}</p>
              <div className="mt-8 h-px bg-gradient-to-r from-[#AFA393]/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
