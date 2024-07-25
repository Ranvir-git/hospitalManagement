import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            MedCare is your trusted healthcare partner, offering top-notch medical services with a personal touch. Our team is driven by a passion for helping others and a commitment to providing the best possible care.
          </p>
        
          <p>
          <b>Our Values</b><br />
          Caring: We genuinely care about your health and well-being.<br />
          Expertise: Our team consists of highly skilled professionals with years of experience.<br />
          Friendliness: You'll always be greeted with a smile at MedCare.
        </p>
          <p><b>Our Team</b></p>
          <p>
            Our team is made up of friendly faces who are here to support you every step of the way. From our doctors to our administrative staff, everyone at MedCare is dedicated to making your experience as pleasant as possible.
          </p>
          <p><b>Commitment to You</b></p>
          <p>
            At MedCare, you're more than just a patient – you're part of our family. We'll go above and beyond to ensure you receive the care and attention you deserve.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
