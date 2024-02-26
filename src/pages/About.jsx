import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";

function About() {
  const [aboutData, setAboutData] = useState("");

  useEffect(() => {
    ReactGA.send("page_view",{
      page_location: window.location.pathname,
      page_title: "About page",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!aboutData) return false;
    console.log(aboutData);
    ReactGA.event("add_to_cart",{
      currency: USD,
      value: 33,
      items: [{id:1}, {id:2}],
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
