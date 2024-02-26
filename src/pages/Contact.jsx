import React, { useState } from "react";

function Contact() {
  const [contactData, setContactData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactData) return false;
    console.log(contactData);
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
