import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";

function About() {
  const [aboutData, setAboutData] = useState("");

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Custom About Title",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!aboutData) return false;
    console.log(aboutData);
    ReactGA.event({
      category: "About page",
      action: aboutData,
      label: "Click About page form",
    });
    setAboutData("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="about-page-form">About Page : </label>{" "}
      <input
        id="about-page-form"
        type="text"
        onChange={(e) => setAboutData(e.target.value)}
        value={aboutData}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default About;
