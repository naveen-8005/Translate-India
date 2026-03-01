import React, { use, useRef } from "react";
import Navbar from "./Pages/Navbar";
import Main from "./Pages/Main";
import Card from "./Pages/Card";
import Components from "./Pages/Components";
import Languages from "./Pages/Languages";
import Client from "./Pages/Client";
import Review from "./Pages/Review";
import ContactForm from "./Pages/ContactForm";
import Footer from "./Pages/Footer";

const App = () => {
  const contactRef = useRef(null);
  const languageRef = useRef(null);
  const serviceRef = useRef(null);
  const navbarRef=useRef(null);
  return (
    <div>
      <div ref={navbarRef}>
           <Navbar 
        contactRef={contactRef}
        languageRef={languageRef}
        serviceRef={serviceRef}
        
      />
      </div>
     
      <Main contactRef={contactRef} />

      <div ref={serviceRef}>
        <Card />
      </div>

      <Components />

      <div ref={languageRef}>
        <Languages />
      </div>

      <Client />
      <Review />
      <div ref={contactRef}>
        <ContactForm
          contactRef={contactRef}
          languageRef={languageRef}
          serviceRef={serviceRef}
        />
      </div>

        <Footer   contactRef={contactRef}
          languageRef={languageRef}
          serviceRef={serviceRef} 
           navbarRef={navbarRef}
        />
    </div>
  );
};

export default App;
