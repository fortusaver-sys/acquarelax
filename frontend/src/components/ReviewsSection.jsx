import React from "react";
import { Star, Quote } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { SectionTag } from "./ui-cdm/Primitives";

const ReviewsSection = () => {
  const { t } = useLang();

  return (
    <section id="recensioni" data-testid="reviews-section" className="py-24 lg:py-32 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl">
          <SectionTag color="sage" testId="reviews-tag">{t.reviews.tag}</SectionTag>
          <h2 className="mt-6 font-heading text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.05] tracking-tight text-[#2C2C2A] font-medium" data-testid="reviews-title">
            {t.reviews.title}
          </h2>
        </div>

        <div className="mt-14 lg:mt-20 grid md:grid-cols-3 gap-5 lg:gap-6" data-testid="reviews-grid">
          {t.reviews.items.map((r, i) => (
            <div
              key={i}
              data-testid={`review-card-${i}`}
              className="relative p-7 lg:p-9 rounded-3xl bg-white border border-[#AFA393]/15 hover:border-[#AFA393]/40 hover:-translate-y-1 transition-all duration-500"
            >
              <Quote size={28} className="text-[#A3CBE0]" />
              <div className="mt-5 flex items-center gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} className="fill-[#C8B9A6] text-[#C8B9A6]" />
                ))}
              </div>
              <p className="mt-5 text-[15px] text-[#2C2C2A] leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-7 pt-5 border-t border-[#AFA393]/15">
                <p className="font-heading text-[16px] tracking-tight text-[#2C2C2A] font-medium">{r.name}</p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-[#5F5E5C]">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
