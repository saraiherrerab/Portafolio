// app/page.js
'use client'
import { useEffect } from "react";
import { useState} from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";


export default function HomePage() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC

    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(()=>{
      if(localStorage.theme==='dark'||((!'theme' in localStorage && window.matchMedia('(prefers-color-scheme:dark)').matches))){
          setIsDarkMode(true)
      }else{
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
   <Header isDarkMode={isDarkMode} setIsDarkMode/>
   <About isDarkMode={isDarkMode} setIsDarkMode/>
   <Services isDarkMode={isDarkMode} setIsDarkMode/>
   <Work isDarkMode={isDarkMode} setIsDarkMode/>
   <Contact isDarkMode={isDarkMode} setIsDarkMode/>
   <Footer isDarkMode={isDarkMode} setIsDarkMode/>
   </>
  );
}