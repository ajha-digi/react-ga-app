import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";

function Home() {
  const [homeData, setHomeData] = useState("");

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Custom Home Title",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!homeData) return false;
    console.log(homeData);
    ReactGA.event({
      category: "Home page",
      action: homeData,
      label: "Click home page form",
    });
    setHomeData("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="home-page-form">Home Page : </label>{" "}
      <input
        id="home-page-form"
        type="text"
        onChange={(e) => setHomeData(e.target.value)}
        value={homeData}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Home;
