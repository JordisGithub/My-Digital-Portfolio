import React from "react";
import "./Header.css";
import Typical from "react-typical";

function Header() {
  return (
    <>
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong className="name">Jordania Pereyra</strong>
        </h1>
        <div className="section__subtitle section__subtitle--intro">
          <Typical
            loop={Infinity}
            wrapper="p"
            steps={[
              "Full Stack Developer",
              1500,
              "Business Professional",
              1500,
              "Marketing Strategist",
              1500,
            ]}
          />
        </div>
        {/* <div className="border">
          <div className="frame">
            <img
              src="https://i.imgur.com/QpGI4yn.jpg"
              alt="Jordi in Brooklyn"
              className="intro__img"
            />
          </div>
        </div> */}
        <div className="border intro__img">
          <div className="frame">
            <img
              className="image"
              src="https://i.imgur.com/oLEOvKU.jpg"
              alt="Jordi in Brooklyn NY"
            ></img>
          </div>
        </div>
        ;
      </section>
    </>
  );
}

export default Header;
