import React, { useState } from "react";

function About() {
  const [aboutData, setAboutData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!aboutData) return false;
    console.log(aboutData);
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
