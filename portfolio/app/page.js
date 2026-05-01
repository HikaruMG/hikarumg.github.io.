'use client';
import About from "./components/About";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Person from "./components/Person";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Work from "./components/Work";
import E404 from "./components/E404";
import { useEffect, useState } from "react";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showPrintTip, setShowPrintTip] = useState(false);

  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true)
    }
    else{
      setIsDarkMode(false)
    }

    // Show notice on every visit.
    setShowPrintTip(true);
  },[])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (!showPrintTip) return;

    const timer = setTimeout(() => {
      setShowPrintTip(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [showPrintTip]);

  const handleClosePrintTip = () => {
    setShowPrintTip(false);
  };

  return (
    <>
    {showPrintTip && (
      <div className="fixed bottom-4 right-4 z-[999] w-[min(92vw,380px)] rounded-lg border border-zinc-200 bg-white/95 p-4 shadow-xl backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/95">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Notice</h3>
        <p className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
          This website supports printing as PDF. Press <span className="font-semibold">Ctrl+P</span> to print or save this page.
        </p>
        <div className="mt-3 flex justify-end">
          <button
            type="button"
            onClick={handleClosePrintTip}
            className="rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition hover:opacity-90 dark:bg-zinc-100 dark:text-zinc-900"
          >
            Got it
          </button>
        </div>
      </div>
    )}
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <section id="header">
      <Header isDarkMode={isDarkMode} />
    </section>
    <section id="about">
      <About isDarkMode={isDarkMode}/>
    </section>
    <section id="services">
      <Services isDarkMode={isDarkMode}/>
    </section>
    <section id="work">
      <Work isDarkMode={isDarkMode}/>
    </section>
    <section id="certificate">
      <Certificate isDarkMode={isDarkMode}/>
    </section>
    {/* <Person isDarkMode={isDarkMode}/> */}
    <section id="contact">
      <Contact isDarkMode={isDarkMode}/>
    </section>
    <section id="footer">
      <Footer isDarkMode={isDarkMode}/>
    </section>
    {/* <Showcase isDarkMode={isDarkMode}/> */}
    {/* <E404 isDarkMode={isDarkMode}/> */}
    </>
  );
}
