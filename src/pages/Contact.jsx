import React from "react";
import ContactSection1 from "../components/Contact/ContactSection1"
import ContactSection2 from "../components/Contact/ContactSection2";

function Contact() {
  return (
    <>
      <div className="min-h-screen">
        <ContactSection1 />
        <ContactSection2 />
      </div>
    </>
  );
}

export default Contact;
