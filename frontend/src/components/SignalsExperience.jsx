import React, { useState, useMemo } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { CTAButton, SectionTag } from "./ui-cdm/Primitives";
import { whatsappLink } from "../lib/brand";

const SIGNALS_IT = [
  "Mi sveglio già stanco",
  "Dormo ma non recupero",
  "Mi alzo con la testa pesante",
  "Mi sento gonfio",
  "Ho spesso sete",
  "Bevo poca acqua",
  "Bevo quasi solo acqua in plastica",
  "Mi addormento tardi",
  "Mi sveglio durante la notte",
  "Mi alzo nervoso",
  "Ho poca energia al mattino",
  "Faccio fatica a concentrarmi",
  "Ho sonnolenza durante il giorno",
  "Mi sento appesantito",
  "Ho la bocca secca al risveglio",
  "Mi sveglio con tensione",
  "Sento il corpo rigido",
  "Ho spesso mal di testa",
  "Mi sento stressato",
  "Non riesco a rilassarmi",
  "Bevo acqua senza pensarci",
  "Uso troppe bottiglie di plastica",
  "Non so che acqua bevo davvero",
  "Voglio stare meglio ma rimando",
];

const SIGNALS_EN = [
  "I wake up already tired",
  "I sleep but don't recover",
  "I get up with a heavy head",
  "I feel bloated",
  "I'm often thirsty",
  "I drink little water",
  "I drink mostly plastic-bottled water",
  "I fall asleep late",
  "I wake up during the night",
  "I get up tense",
  "I have low morning energy",
  "I struggle to focus",
  "I get drowsy during the day",
  "I feel heavy",
  "I have a dry mouth on waking",
  "I wake up with tension",
  "My body feels stiff",
  "I often get headaches",
  "I feel stressed",
  "I can't relax",
  "I drink water without thinking",
  "I use too many plastic bottles",
  "I don't really know what water I drink",
  "I want to feel better but keep postponing",
];

const COPY = {
  it: {
    tag: "Esperienza interattiva",
    title: "Quanti di questi segnali riconosci?",
    subtitle:
      "Premi solo quelli che senti davvero. Il contatore ti mostrerà quanti segnali stai ignorando ogni giorno.",
    counterLabel: "Segnali selezionati",
    msg0: "Seleziona i segnali che riconosci nella tua giornata.",
    msg13: "Hai già alcuni segnali da non ignorare.",
    msg48:
      "Il tuo corpo ti sta probabilmente chiedendo più recupero, più cura e meno abitudini automatiche.",
    msg9:
      "Questi segnali meritano attenzione: forse è il momento di cambiare qualcosa nella tua routine quotidiana.",
    solutionTag: "La soluzione",
    solutionTitle: "LA SOLUZIONE È CDM",
    solutionText:
      "Un'esperienza breve, guidata e rilassante: ambiente profumato, pausa rigenerante, acqua depurata e un momento pensato per rimettere il corpo in modalità recupero.",
    cta: "Prenota la tua pausa CDM",
    reset: "Azzera selezione",
  },
  en: {
    tag: "Interactive experience",
    title: "How many of these signals do you recognise?",
    subtitle:
      "Tap only the ones you truly feel. The counter will show how many signals you're ignoring every day.",
    counterLabel: "Selected signals",
    msg0: "Select the signals you recognise in your day.",
    msg13: "You already have a few signals worth noticing.",
    msg48:
      "Your body is probably asking for more recovery, more care and fewer automatic habits.",
    msg9:
      "These signals deserve attention: it may be time to change something in your daily routine.",
    solutionTag: "The answer",
    solutionTitle: "THE ANSWER IS CDM",
    solutionText:
      "A short, guided and relaxing experience: scented space, regenerating pause, purified water and a moment designed to switch your body back to recovery mode.",
    cta: "Book your CDM pause",
    reset: "Reset selection",
  },
};

const SignalsExperience = () => {
  const { lang } = useLang();
  const t = COPY[lang];
  const SIGNALS = lang === "it" ? SIGNALS_IT : SIGNALS_EN;
  const [selected, setSelected] = useState(() => new Set());

  const toggle = (i) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const count = selected.size;
  const message = useMemo(() => {
    if (count === 0) return t.msg0;
    if (count <= 3) return t.msg13;
    if (count <= 8) return t.msg48;
    return t.msg9;
  }, [count, t]);

  // progress: max represents 12 (anything 12+ caps the visual bar)
  const progress = Math.min(100, (count / 12) * 100);

  return (
    <section
      id="segnali"
      data-testid="signals-section"
      className="py-20 lg:py-28 bg-[#FDFCF0] relative overflow-hidden"
    >
      <div aria-hidden className="absolute -top-20 right-1/4 w-[380px] h-[380px] rounded-full bg-[#D6E8ED] opacity-40 blur-3xl -z-0" />
      <div aria-hidden className="absolute -bottom-20 left-1/4 w-[380px] h-[380px] rounded-full bg-[#DCD3C6] opacity-40 blur-3xl -z-0" />

      <div className="max-w-4xl mx-auto px-5 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <SectionTag color="water" testId="signals-tag">{t.tag}</SectionTag>
          <h2
            data-testid="signals-title"
            className="mt-6 font-heading text-[30px] sm:text-[38px] lg:text-[46px] leading-[1.08] tracking-tight text-[#2C2C2A] font-medium"
          >
            {t.title}
          </h2>
          <p
            data-testid="signals-subtitle"
            className="mt-5 text-[14px] sm:text-[15px] text-[#5F5E5C] leading-relaxed"
          >
            {t.subtitle}
          </p>
        </div>

        {/* Interactive card */}
        <div
          data-testid="signals-card"
          className="mt-10 lg:mt-14 rounded-[28px] bg-white border border-[#AFA393]/15 shadow-cdm-md p-5 sm:p-8 lg:p-10"
        >
          {/* Counter row */}
          <div className="flex items-center justify-between gap-4 flex-wrap" data-testid="signals-counter-row">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#5F5E5C] font-medium">
                {t.counterLabel}
              </p>
              <p
                data-testid="signals-counter"
                className="mt-1 font-heading text-[40px] sm:text-[48px] leading-none tracking-tight text-[#2C2C2A] font-medium tabular-nums"
              >
                {count}
                <span className="text-[#AFA393]/50 text-[24px] sm:text-[28px] font-light">/{SIGNALS.length}</span>
              </p>
            </div>
            {count > 0 && (
              <button
                data-testid="signals-reset"
                onClick={() => setSelected(new Set())}
                className="text-[12px] uppercase tracking-[0.2em] text-[#5F5E5C] hover:text-[#2C2C2A] underline underline-offset-4 decoration-[#AFA393]/40 transition-colors"
              >
                {t.reset}
              </button>
            )}
          </div>

          {/* Progress bar */}
          <div className="mt-5 h-1.5 rounded-full bg-[#F5F3E9] overflow-hidden" aria-hidden>
            <div
              className="h-full bg-gradient-to-r from-[#A3CBE0] via-[#AEC0B2] to-[#AFA393] transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Chips grid */}
          <div
            data-testid="signals-chips"
            className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5"
          >
            {SIGNALS.map((s, i) => {
              const isOn = selected.has(i);
              return (
                <button
                  key={i}
                  data-testid={`signal-chip-${i}`}
                  data-state={isOn ? "selected" : "idle"}
                  onClick={() => toggle(i)}
                  className={`group relative text-left px-3.5 py-3 rounded-2xl border text-[12.5px] sm:text-[13px] leading-snug font-medium transition-all duration-300 ease-out will-change-transform fade-up
                    ${isOn
                      ? "bg-[#2C2C2A] text-[#FDFCF0] border-[#2C2C2A] shadow-cdm-sm scale-[0.99]"
                      : "bg-[#FFF4F2] text-[#9B2C2C] border-[#E8B8B4] hover:bg-[#FFEBE7] hover:border-[#D98F88] hover:-translate-y-0.5"}`}
                  style={{ animationDelay: `${Math.min(i * 30, 700)}ms` }}
                  aria-pressed={isOn}
                >
                  <span className="flex items-start gap-2">
                    <span
                      className={`mt-0.5 inline-flex items-center justify-center h-4 w-4 rounded-full border shrink-0 transition-all duration-300
                        ${isOn ? "bg-[#A3CBE0] border-[#A3CBE0] text-[#2C2C2A]" : "border-[#D98F88] bg-white/60"}`}
                    >
                      {isOn && <Check size={11} strokeWidth={3} />}
                    </span>
                    <span className="flex-1">{s}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic message */}
          <div
            data-testid="signals-message"
            key={count <= 0 ? "0" : count <= 3 ? "13" : count <= 8 ? "48" : "9"}
            className="mt-9 p-5 sm:p-6 rounded-2xl bg-[#FAF9F5] border border-[#AFA393]/15 fade-up"
          >
            <p className="font-heading text-[15px] sm:text-[17px] leading-snug text-[#2C2C2A] tracking-tight">
              {message}
            </p>
          </div>

          {/* Solution box */}
          <div
            data-testid="signals-solution"
            className="mt-6 relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#2C2C2A] to-[#1f1f1d] text-[#FDFCF0] overflow-hidden"
          >
            <div aria-hidden className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#A3CBE0] opacity-25 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 text-[#A3CBE0]">
                <Sparkles size={14} />
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium" data-testid="signals-solution-tag">
                  {t.solutionTag}
                </span>
              </div>
              <h3
                data-testid="signals-solution-title"
                className="mt-3 font-heading text-[20px] sm:text-[24px] lg:text-[28px] leading-tight tracking-tight font-medium"
              >
                {t.solutionTitle}
              </h3>
              <p
                data-testid="signals-solution-text"
                className="mt-4 text-[13px] sm:text-[14px] text-[#FDFCF0]/80 leading-relaxed max-w-xl"
              >
                {t.solutionText}
              </p>
              <CTAButton
                href={whatsappLink(
                  lang === "it"
                    ? `Ciao CDM, ho selezionato ${count} segnali nel quiz e vorrei prenotare la mia pausa CDM.`
                    : `Hi CDM, I selected ${count} signals in the quiz and would like to book my CDM pause.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                className="mt-7"
                testId="signals-cta"
                icon={<ArrowRight size={16} />}
              >
                {t.cta}
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignalsExperience;
