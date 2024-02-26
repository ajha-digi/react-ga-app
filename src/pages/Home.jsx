import React, { useState } from "react";

function Home() {
  const [homeData, setHomeData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!homeData) return false;
    console.log(homeData);
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
