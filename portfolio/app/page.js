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

  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true)
    }
    else{
      setIsDarkMode(false)
    }
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

  return (
    <>
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
