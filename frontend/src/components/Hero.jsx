import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          MedCare is your dedicated healthcare provider, committed to delivering exceptional medical services with a personal touch. Our team is driven by a passion for your well-being and a dedication to providing the best care possible. With state-of-the-art facilities and a compassionate approach, we strive to exceed your expectations and ensure your satisfaction at every step of your healthcare journey.
        </p>
        </div>
        <div className="banner ran">
          <img src={imageUrl} alt="hero" className="animated-image ran"/>
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
