import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";

function Home() {
  const [homeData, setHomeData] = useState("");

  useEffect(() => {
    ReactGA.send("page_view",{
      page_location: window.location.pathname,
      page_title: "Home page",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!homeData) return false;
    console.log(homeData);
    ReactGA.event("view_search_results",{
      search_term	:homeData
    });
    ReactGA.event('conversion', true);
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
