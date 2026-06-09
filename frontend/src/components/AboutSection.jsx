import React from "react";
import { Award, Lightbulb, ShieldCheck, Heart, Wrench, MapPin } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { SectionTag, PlaceholderImage } from "./ui-cdm/Primitives";

const ICONS = [Award, Lightbulb, ShieldCheck, Heart, Wrench, MapPin];

const AboutSection = () => {
  const { t } = useLang();

  return (
    <section id="chi-siamo" data-testid="about-section" className="py-24 lg:py-32 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <SectionTag color="neutral" testId="about-tag">{t.about.tag}</SectionTag>
            <h2 className="mt-6 font-heading text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.05] tracking-tight text-[#2C2C2A] font-medium" data-testid="about-title">
              {t.about.title}{" "}
              <span className="italic font-light text-[#5A9BB8]">{t.about.titleAccent}</span>
            </h2>
            <p className="mt-7 max-w-2xl text-[15px] text-[#5F5E5C] leading-relaxed" data-testid="about-description">
              {t.about.description}
            </p>

            {/* Values */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3" data-testid="about-values">
              {t.about.values.map((v, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <div
                    key={i}
                    data-testid={`about-value-${i}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-[#AFA393]/15"
                  >
                    <span className="h-9 w-9 rounded-xl bg-[#F5F3E9] flex items-center justify-center text-[#AFA393]">
                      <Icon size={16} />
                    </span>
                    <span className="text-[14px] text-[#2C2C2A] font-medium">{v}</span>
                  </div>
                );
              })}
            </div>

            {/* Quote */}
            <blockquote className="mt-12 relative pl-6 border-l-2 border-[#5A9BB8] max-w-2xl" data-testid="about-quote">
              <p className="font-heading text-[20px] lg:text-[24px] leading-snug tracking-tight text-[#2C2C2A] italic font-light">
                &ldquo;{t.about.quote}&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right: stats + placeholder */}
          <div className="lg:col-span-5 space-y-5" data-testid="about-stats">
            <PlaceholderImage variant="sage" className="h-[260px] w-full" testId="about-placeholder" label="immagine prova" />
            <div className="grid grid-cols-2 gap-4">
              {t.about.stats.map((s, i) => (
                <div
                  key={i}
                  data-testid={`about-stat-${i}`}
                  className="p-6 rounded-3xl bg-white border border-[#AFA393]/15"
                >
                  <p className="font-heading text-[36px] lg:text-[42px] leading-none tracking-tight text-[#2C2C2A] font-medium">
                    {s.value}
                  </p>
                  <p className="mt-3 text-[12px] uppercase tracking-[0.2em] text-[#5F5E5C]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
