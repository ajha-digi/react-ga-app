import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";

function Contact() {
  const [contactData, setContactData] = useState("");

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Custom  Contact Title",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactData) return false;
    console.log(contactData);
    ReactGA.event({
      category: "Contact page",
      action: contactData,
      label: "Click contact page form",
    });
    setContactData("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="conatct-page-form">Conatct Page : </label>{" "}
      <input
        id="conatct-page-form"
        type="text"
        onChange={(e) => setContactData(e.target.value)}
        value={contactData}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Contact;
