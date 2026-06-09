import React from "react";

// PlaceholderImage: elegant soft-gradient block with "immagine prova" label
export const PlaceholderImage = ({
  className = "",
  variant = "water", // 'water' | 'relax' | 'mixed' | 'sage' | 'bronze'
  label = "immagine prova",
  testId = "placeholder-image",
}) => {
  const gradients = {
    water:
      "linear-gradient(135deg, #D6E8ED 0%, #FAF9F5 50%, #AEC0B2 100%)",
    relax:
      "linear-gradient(135deg, #DCD3C6 0%, #FAF9F5 55%, #C8B9A6 100%)",
    mixed:
      "linear-gradient(135deg, #D6E8ED 0%, #FAF9F5 45%, #DCD3C6 100%)",
    sage:
      "linear-gradient(135deg, #AEC0B2 0%, #FDFCF0 60%, #D6E8ED 100%)",
    bronze:
      "linear-gradient(135deg, #C8B9A6 0%, #FAF9F5 55%, #AFA393 100%)",
  };
  return (
    <div
      data-testid={testId}
      className={`relative overflow-hidden rounded-3xl ${className}`}
      style={{ background: gradients[variant] || gradients.water }}
    >
      <div className="absolute inset-0 grain" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 px-6 text-center">
          <div className="h-10 w-10 rounded-full border border-[#2C2C2A]/15 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#2C2C2A]/50">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#2C2C2A]/60 font-medium">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

// SectionTag: small uppercase pill above section titles
export const SectionTag = ({ children, color = "water", testId }) => {
  const styles = {
    water: "bg-[#D6E8ED] text-[#3F7793]",
    relax: "bg-[#DCD3C6] text-[#6E5F4D]",
    sage: "bg-[#AEC0B2]/40 text-[#3F5A45]",
    neutral: "bg-[#F5F3E9] text-[#2C2C2A]",
  };
  return (
    <span
      data-testid={testId}
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium ${styles[color]}`}
    >
      <span className="h-1 w-1 rounded-full bg-current opacity-70" />
      {children}
    </span>
  );
};

// CTAButton
export const CTAButton = ({
  children,
  variant = "primary", // 'primary' | 'outline' | 'whatsapp' | 'ghost'
  href,
  onClick,
  className = "",
  testId,
  icon = null,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 will-change-transform";
  const styles = {
    primary:
      "bg-[#2C2C2A] text-[#FDFCF0] hover:bg-[#4A4A46] hover:-translate-y-0.5 shadow-cdm-sm hover:shadow-cdm-md",
    outline:
      "border border-[#2C2C2A]/30 text-[#2C2C2A] hover:border-[#2C2C2A] hover:bg-[#2C2C2A] hover:text-[#FDFCF0] hover:-translate-y-0.5",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#1FB956] hover:-translate-y-0.5 shadow-cdm-sm",
    ghost:
      "text-[#2C2C2A] hover:text-[#5A9BB8]",
  };
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} data-testid={testId} className={cls} {...props}>
        {children}
        {icon}
      </a>
    );
  }
  return (
    <button data-testid={testId} onClick={onClick} className={cls} {...props}>
      {children}
      {icon}
    </button>
  );
};

// FeatureItem (used in grids)
export const FeatureItem = ({ icon, text, testId }) => (
  <div
    data-testid={testId}
    className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#AFA393]/15 hover:border-[#A3CBE0]/60 hover:-translate-y-0.5 transition-all duration-300"
  >
    <div className="h-9 w-9 rounded-xl bg-[#D6E8ED] flex items-center justify-center shrink-0 text-[#3F7793]">
      {icon}
    </div>
    <span className="text-sm text-[#2C2C2A] leading-snug pt-1.5">{text}</span>
  </div>
);
