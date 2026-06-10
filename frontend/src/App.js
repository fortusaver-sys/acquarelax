import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { LangProvider } from "./i18n/LangContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SignalsExperience from "./components/SignalsExperience";
import ProblemSection from "./components/ProblemSection";
import WaterSection from "./components/WaterSection";
import RelaxSection from "./components/RelaxSection";
import ArmchairsSection from "./components/ArmchairsSection";
import AboutSection from "./components/AboutSection";
import MethodSection from "./components/MethodSection";
import ShowroomSection from "./components/ShowroomSection";
import FinancingSection from "./components/FinancingSection";
import ReviewsSection from "./components/ReviewsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

const HomePage = () => (
  <div data-testid="home-page" className="bg-cdm-primary text-cdm-primary overflow-x-hidden">
    <Header />
    <main>
      <Hero />
      <SignalsExperience />
      <ProblemSection />
      <WaterSection />
      <RelaxSection />
      <ArmchairsSection />
      <AboutSection />
      <MethodSection />
      <ShowroomSection />
      <FinancingSection />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppFloatingButton />
  </div>
);

function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  );
}

export default App;
