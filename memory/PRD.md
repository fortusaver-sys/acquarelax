# CDM Acqua & Relax — Premium Marketing Site

## Original problem statement
Sito web premium one-page per CDM Acqua & Relax (Reggio Calabria) — settore depuratori d'acqua, sistemi di riposo/materassi, poltrone relax. Stile luxury wellness italiana, sfondi chiari caldi (bianco latte, avorio, sabbia), accenti acqua (azzurro cristallo, blu ghiaccio, verde salvia) e relax (tortora, crema, bronzo soft). Font Manrope (titoli) + Inter (body). CTA: "Richiedi consulenza gratuita", "Prenota test acqua gratuito", WhatsApp floating. Switcher IT/EN.

## User decisions
- Form contatti: **solo WhatsApp/mailto** (no backend / DB)
- WhatsApp number: **3533923263** (wa.me/3533923263)
- Lingue: **IT + EN** con switcher in navbar
- Immagini: utente fornisce 1 (acqua before/after); resto = placeholder eleganti con label "immagine prova"
- Recensioni: placeholder dal brief (Maria R., Giuseppe C., Alessandra M.)

## Architecture
- **Frontend only**: React 19 + Tailwind 3 + Lucide icons + Manrope/Inter (Google Fonts)
- **Backend**: invariato (template FastAPI con /api/status — non utilizzato dal sito)
- **i18n**: contesto React custom in `src/i18n/LangContext.jsx` con persistenza localStorage; stringhe in `src/i18n/translations.js`
- **Brand constants** in `src/lib/brand.js` (telefoni, email, indirizzi, helper `whatsappLink()`)

## Components implemented (2026-12-09)
- Header.jsx (sticky glassmorphism + lang switcher + mobile menu)
- Hero.jsx (titolo grande, CTA, trust badges, immagine cucina + floating relax card + placeholder)
- ProblemSection.jsx (3 card)
- WaterSection.jsx (titolo, 8 benefit, CTA card scura, before/after, immagine fornita dall'utente)
- RelaxSection.jsx (immagine bedroom + bento features + 4 prodotti)
- ArmchairsSection.jsx (immagine poltrona + 6 features chip + 3 prodotti)
- AboutSection.jsx (valori + 4 stat + quote)
- MethodSection.jsx (timeline 4 step)
- ShowroomSection.jsx (mappa Google embed + 4 info card)
- FinancingSection.jsx (4 badge + nota prudente)
- ReviewsSection.jsx (3 card stelle)
- FAQSection.jsx (accordion 8 voci)
- ContactSection.jsx (card scura finale, 3 CTA: email, WhatsApp, tel)
- Footer.jsx (brand, contatti, navigazione, indirizzi, privacy/cookie)
- WhatsAppFloatingButton.jsx (pulse animation, appare al scroll)

## What's been implemented (status: COMPLETE)
- Sito completo, responsive mobile-first, navbar sticky con glass effect
- IT/EN switcher funzionante (Hero "Acqua pura." ↔ "Pure water.")
- Tutti i CTA puntano correttamente a wa.me/3533923263, tel:+393716250300, mailto:info@cdmacquaerelax.it
- SEO: meta title + description in italiano nell'index.html
- Google Maps embed showroom Reggio Calabria
- Test E2E con testing_agent_v3: 100% pass (19/19 feature), 0 console errors

## Backlog / Next features (P0/P1/P2)
- **P1**: sostituire placeholder "immagine prova" con foto reali del cliente (prodotti, showroom, team)
- **P1**: aggiungere Privacy/Cookie policy reali (attualmente link `#`)
- **P2**: form contatto opzionale con backend MongoDB + invio email (Resend/SendGrid) per chi non usa WhatsApp
- **P2**: blog/news per SEO long-tail ("acqua dura Reggio Calabria", "miglior materasso Made in Italy")
- **P2**: schema.org LocalBusiness/Product per ricchi snippet Google
- **P2**: galleria showroom con lightbox
- **P3**: pagine prodotto dedicate (Nuvola Bio Air, Salus Relax, Velvet/Ester/Nuvola Relax)
- **P3**: integrazione Klarna/Pago Light per simulatore rate
- **P3**: dashboard admin per gestire recensioni reali
