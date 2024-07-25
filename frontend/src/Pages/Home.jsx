import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to MedCare , Your Trusted Healthcare Partner"
        }
        imageUrl={"/dector.jpg"}
      />
      <Biography imageUrl={"/about.png"} />
      
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
