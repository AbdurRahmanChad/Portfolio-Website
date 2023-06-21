import { useEffect } from "react";

import Aos from "aos";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/services";
import Portfolio from "./Components/portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";




function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="max-w-[1024px]  mx-auto">
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </>
  )
};

export default App;
