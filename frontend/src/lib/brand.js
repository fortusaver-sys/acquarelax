// Centralized brand constants
export const BRAND = {
  name: "CDM Acqua & Relax",
  partner: "Partner di CDM Group SRLS",
  whatsapp: "3533923263",
  whatsappDisplay: "+39 353 392 3263",
  phones: [
    { label: "+39 371 625 0300", tel: "+393716250300" },
    { label: "+39 393 078 0113", tel: "+393930780113" },
  ],
  emails: ["info@cdmacquaerelax.it", "cdmgroupsrls@gmail.com"],
  showroom: {
    line1: "Via Modena Chiesa 21",
    line2: "89132 Reggio Calabria",
    maps: "https://www.google.com/maps/search/?api=1&query=Via+Modena+Chiesa+21+Reggio+Calabria",
  },
  hq: {
    line1: "Via Provinciale Cannavò Pavigliana 6A, 1° Piano",
    line2: "89133 Reggio Calabria",
  },
};

export const whatsappLink = (message = "") => {
  const text = encodeURIComponent(
    message || "Ciao CDM, vorrei prenotare una consulenza gratuita."
  );
  return `https://wa.me/${BRAND.whatsapp}?text=${text}`;
};

export const IMAGES = {
  heroKitchen:
    "https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBraXRjaGVuJTIwYnJpZ2h0fGVufDB8fHx8MTc4MTAzMzg0N3ww&ixlib=rb-4.1.0&q=85",
  waterBeforeAfter:
    "https://customer-assets.emergentagent.com/job_riposo-puro-italia/artifacts/r12b40f7_ChatGPT%20Image%209%20giu%202026%2C%2021_32_42.png",
  bedroom:
    "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYmVkcm9vbSUyMGx1eHVyeSUyMGJyaWdodHxlbnwwfHx8fDE3ODEwMzM4NDd8MA&ixlib=rb-4.1.0&q=85",
  armchair:
    "https://images.unsplash.com/photo-1707848106960-74e1b223297b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsZWF0aGVyJTIwYXJtY2hhaXIlMjBtb2Rlcm4lMjBsaXZpbmclMjByb29tfGVufDB8fHx8MTc4MTAzMzg0N3ww&ixlib=rb-4.1.0&q=85",
};
