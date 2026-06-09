import React from "react";
import {
  Droplet,
  ShieldCheck,
  BadgeCheck,
  GlassWater,
  CreditCard,
  Leaf,
  Wrench,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { CTAButton, SectionTag, FeatureItem } from "./ui-cdm/Primitives";
import { IMAGES, whatsappLink } from "../lib/brand";

const WaterSection = () => {
  const { t } = useLang();

  const benefits = [
    { icon: <Droplet size={16} />, text: t.water.benefit1 },
    { icon: <ShieldCheck size={16} />, text: t.water.benefit2 },
    { icon: <BadgeCheck size={16} />, text: t.water.benefit3 },
    { icon: <GlassWater size={16} />, text: t.water.benefit4 },
    { icon: <CreditCard size={16} />, text: t.water.benefit5 },
    { icon: <Leaf size={16} />, text: t.water.benefit6 },
    { icon: <Wrench size={16} />, text: t.water.benefit7 },
    { icon: <Sparkles size={16} />, text: t.water.benefit8 },
  ];

  return (
    <section id="acqua" data-testid="water-section" className="py-24 lg:py-32 bg-[#FDFCF0] relative overflow-hidden">
      {/* Soft ambient */}
      <div aria-hidden className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#D6E8ED] opacity-50 blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <SectionTag color="water" testId="water-tag">{t.water.tag}</SectionTag>
            <h2 className="mt-6 font-heading text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.04] tracking-tight text-[#2C2C2A] font-medium" data-testid="water-title">
              {t.water.title}
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] sm:text-base text-[#5F5E5C] leading-relaxed font-medium" data-testid="water-subtitle">
              {t.water.subtitle}
            </p>
            <p className="mt-5 max-w-2xl text-[14px] sm:text-[15px] text-[#5F5E5C] leading-relaxed" data-testid="water-description">
              {t.water.description}
            </p>
          </div>

          {/* Floating CTA card */}
          <div className="lg:col-span-5">
            <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[#2C2C2A] to-[#1f1f1d] text-[#FDFCF0] shadow-cdm-lg overflow-hidden" data-testid="water-cta-card">
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#A3CBE0] opacity-30 blur-3xl" />
              <div className="relative">
                <Droplet size={24} className="text-[#A3CBE0]" />
                <h3 className="mt-6 font-heading text-[26px] lg:text-[30px] leading-tight tracking-tight">
                  Test acqua gratuito.<br />
                  <span className="text-[#A3CBE0] italic font-light">A casa tua.</span>
                </h3>
                <p className="mt-4 text-[14px] text-[#FDFCF0]/70 leading-relaxed">
                  Un nostro consulente verifica gratuitamente la qualit&agrave; dell&apos;acqua del tuo rubinetto e ti propone la soluzione pi&ugrave; adatta.
                </p>
                <CTAButton
                  href={whatsappLink("Ciao CDM, vorrei prenotare il test acqua gratuito.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  className="mt-7 w-full"
                  testId="water-cta-test"
                  icon={<ArrowRight size={16} />}
                >
                  {t.water.cta}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="mt-14 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4" data-testid="water-benefits">
          {benefits.map((b, i) => (
            <FeatureItem key={i} icon={b.icon} text={b.text} testId={`water-benefit-${i}`} />
          ))}
        </div>

        {/* Before / After */}
        <div className="mt-20 lg:mt-28 grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch" data-testid="water-before-after">
          {/* Before card */}
          <div className="relative p-7 lg:p-9 rounded-3xl bg-[#F5F3E9] border border-[#AFA393]/20 overflow-hidden">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#AFA393]/25 text-[10px] uppercase tracking-[0.3em] text-[#5F5E5C]">
              {t.water.beforeTitle}
            </span>
            <p className="mt-5 font-heading text-[#2C2C2A] text-[22px] lg:text-[26px] leading-tight tracking-tight font-medium">
              {t.water.beforeText}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Plastica", "Peso", "Spreco", "Costo"].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white text-[11px] text-[#5F5E5C] border border-[#AFA393]/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* After card */}
          <div className="relative p-7 lg:p-9 rounded-3xl bg-gradient-to-br from-[#D6E8ED] via-[#FAF9F5] to-[#AEC0B2]/40 border border-[#A3CBE0]/30 overflow-hidden">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#A3CBE0]/40 text-[10px] uppercase tracking-[0.3em] text-[#3F7793]">
              {t.water.afterTitle}
            </span>
            <p className="mt-5 font-heading text-[#2C2C2A] text-[22px] lg:text-[26px] leading-tight tracking-tight font-medium">
              {t.water.afterText}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Filtrata", "Fresca", "Comoda", "Sostenibile"].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white text-[11px] text-[#3F7793] border border-[#A3CBE0]/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* User-provided before/after visual */}
        <div className="mt-10 lg:mt-12 rounded-3xl overflow-hidden shadow-cdm-lg border border-[#AFA393]/15 bg-[#1a1a18]" data-testid="water-visual-comparison">
          <img
            src={IMAGES.waterBeforeAfter}
            alt="Confronto acqua prima e dopo depurazione"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WaterSection;
