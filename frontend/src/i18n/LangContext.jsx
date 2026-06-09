import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

const LangContext = createContext({ lang: "it", setLang: () => {}, t: translations.it });

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("cdm_lang") || "it";
    } catch {
      return "it";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cdm_lang", lang);
      document.documentElement.lang = lang;
    } catch {
      // noop - localStorage unavailable
    }
  }, [lang]);

  const value = { lang, setLang, t: translations[lang] };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);
