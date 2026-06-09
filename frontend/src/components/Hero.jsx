import React from "react";
import { ArrowRight, Droplet, Moon, ChevronDown } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { CTAButton, PlaceholderImage } from "./ui-cdm/Primitives";
import { IMAGES } from "../lib/brand";

const Hero = () => {
  const { t } = useLang();

  return (
    <section id="home" data-testid="hero-section" className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Soft ambient backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-[#D6E8ED] opacity-50 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[480px] h-[480px] rounded-full bg-[#DCD3C6] opacity-45 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[360px] h-[360px] rounded-full bg-[#AEC0B2] opacity-30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Tag */}
        <div className="flex items-center gap-3 fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-[#AFA393]/25 backdrop-blur text-[11px] uppercase tracking-[0.28em] text-[#2C2C2A] font-medium" data-testid="hero-badge">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5A9BB8]" />
            {t.hero.badge}
          </span>
        </div>

        <div className="mt-7 grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          {/* Title block */}
          <div className="lg:col-span-7 fade-up">
            <h1 className="font-heading font-medium text-[#2C2C2A] text-[44px] leading-[1.04] sm:text-[56px] lg:text-[78px] tracking-tight">
              <span className="block" data-testid="hero-title-1">{t.hero.title1}</span>
              <span className="block" data-testid="hero-title-2">{t.hero.title2}</span>
              <span className="block italic text-[#5A9BB8] font-light" data-testid="hero-title-3">{t.hero.title3}</span>
            </h1>

            <p className="mt-7 max-w-xl text-[15px] sm:text-base lg:text-lg text-[#5F5E5C] leading-relaxed" data-testid="hero-subtitle">
              {t.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap gap-3" data-testid="hero-ctas">
              <CTAButton href="#contatti" variant="primary" testId="hero-cta-primary" icon={<ArrowRight size={16} />}>
                {t.hero.ctaPrimary}
              </CTAButton>
              <CTAButton href="#acqua" variant="outline" testId="hero-cta-secondary">
                {t.hero.ctaSecondary}
              </CTAButton>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 pt-6 border-t border-[#AFA393]/20" data-testid="hero-trust">
              {[t.hero.trust1, t.hero.trust2, t.hero.trust3].map((trust, i) => (
                <div key={i} className="flex items-center gap-2" data-testid={`hero-trust-${i}`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#AEC0B2]" />
                  <span className="text-[12px] uppercase tracking-[0.18em] text-[#5F5E5C] font-medium">{trust}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual block: split */}
          <div className="lg:col-span-5 fade-up">
            <div className="relative">
              {/* Big image card */}
              <div className="relative rounded-[28px] overflow-hidden shadow-cdm-lg" data-testid="hero-image">
                <img
                  src={IMAGES.heroKitchen}
                  alt="Cucina moderna con acqua cristallina"
                  className="w-full h-[420px] lg:h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2A]/30 via-transparent to-transparent" />
                {/* Float badge */}
                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur text-[11px] uppercase tracking-[0.2em] text-[#2C2C2A] font-medium flex items-center gap-2">
                  <Droplet size={12} className="text-[#5A9BB8]" />
                  Acqua pura
                </div>
              </div>

              {/* Floating accent card */}
              <div className="hidden md:flex absolute -bottom-8 -left-8 lg:-left-12 flex-col gap-1 p-5 rounded-3xl bg-[#FDFCF0] shadow-cdm-md border border-[#AFA393]/20 max-w-[230px]" data-testid="hero-floating-card">
                <div className="flex items-center gap-2 text-[#AFA393]">
                  <Moon size={16} />
                  <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Relax</span>
                </div>
                <p className="font-heading text-[#2C2C2A] text-[20px] leading-tight tracking-tight mt-1">
                  Sonno profondo, ogni notte.
                </p>
                <span className="text-[12px] text-[#5F5E5C] mt-1">Materassi · Reti · Poltrone</span>
              </div>

              {/* Small placeholder strip */}
              <div className="hidden md:block absolute -top-6 -right-6">
                <PlaceholderImage variant="relax" className="h-28 w-28 shadow-cdm-md" testId="hero-mini-placeholder" label="immagine prova" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 lg:mt-24 flex items-center gap-3 text-[#5F5E5C]" data-testid="hero-scroll">
          <ChevronDown size={16} className="animate-bounce" />
          <span className="text-[11px] uppercase tracking-[0.3em]">{t.hero.scroll}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
