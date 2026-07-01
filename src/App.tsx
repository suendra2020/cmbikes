import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Bike } from "./types";

// Component imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

// View imports
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import NewBikesView from "./components/NewBikesView";
import UsedBikesView from "./components/UsedBikesView";
import BuyBikeView from "./components/BuyBikeView";
import SellBikeView from "./components/SellBikeView";
import ExchangeView from "./components/ExchangeView";
import FinanceView from "./components/FinanceView";
import InsuranceView from "./components/InsuranceView";
import AccessoriesView from "./components/AccessoriesView";
import GalleryView from "./components/GalleryView";
import ReviewsView from "./components/ReviewsView";
import FaqView from "./components/FaqView";
import ContactView from "./components/ContactView";

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);

  useEffect(() => {
    localStorage.removeItem("theme");
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }, []);

  // Sync hash with current tab for convenient back-button browser behavior
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setCurrentTab(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Run once during mount
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleTabChange = (tabId: string) => {
    setCurrentTab(tabId);
    window.location.hash = tabId;
  };

  const renderView = () => {
    switch (currentTab) {
      case "home":
        return <HomeView setCurrentTab={handleTabChange} setSelectedBike={setSelectedBike} />;
      case "about":
        return <AboutView setCurrentTab={handleTabChange} />;
      case "new-bikes":
        return <NewBikesView />;
      case "used-bikes":
        return <UsedBikesView />;
      case "buy-bike":
        return <BuyBikeView />;
      case "sell-bike":
        return <SellBikeView />;
      case "exchange":
        return <ExchangeView />;
      case "finance":
        return <FinanceView />;
      case "insurance":
        return <InsuranceView />;
      case "accessories":
        return <AccessoriesView />;
      case "gallery":
        return <GalleryView />;
      case "reviews":
        return <ReviewsView />;
      case "faqs":
        return <FaqView />;
      case "contact":
        return <ContactView />;
      default:
        return <HomeView setCurrentTab={handleTabChange} setSelectedBike={setSelectedBike} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark text-slate-100 overflow-x-hidden antialiased">
      {/* 1. Header Navigation */}
      <Header currentTab={currentTab} setCurrentTab={handleTabChange} />

      {/* 2. Main View Container (with modular animations) */}
      <main className="flex-grow pt-[72px]" id="showroom-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full h-full"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Global Floating Action Bubbles */}
      <FloatingActions />

      {/* 4. Luxury Footer */}
      <Footer setCurrentTab={handleTabChange} />
    </div>
  );
}
