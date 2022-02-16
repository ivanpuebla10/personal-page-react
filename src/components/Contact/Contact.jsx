import React, { useState } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";


export const Contact = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastname:"",
    email: "",
    birthdate: ""
  });
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("sending data..." + data.name + " " + data.email);
    setTimeout(() => {
        navigate("/");
      }, 1000);
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="firstname"
        onChange={handleInputChange}
        name="firstname"
      />
      <input
        type="text"
        placeholder="lastname"
        onChange={handleInputChange}
        name="lastname"
      />
      <input
        type="email"
        placeholder="email"
        onChange={handleInputChange}
        name="email"
      />
      <input
        type="date"
        placeholder="birthdate"
        onChange={handleInputChange}
        name="birthdate"
      />
      
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
