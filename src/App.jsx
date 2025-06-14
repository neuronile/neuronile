import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Faq } from "./components/faq";
import { LogoSlider } from "./components/logoSlider";
import QuoteRequest from "./components/qouteRequest";
import { Footer } from "./components/footer";
import { Mission } from "./components/mission";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <LogoSlider />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      <Mission/>
      <Services data={landingPageData.Services} />
      {/* <Gallery data={landingPageData.Gallery} /> */}
      
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <QuoteRequest/>
      <Faq/>
      <Contact data={landingPageData.Contact} />
      <Footer/>
      
    </div>
  );
};

export default App;
