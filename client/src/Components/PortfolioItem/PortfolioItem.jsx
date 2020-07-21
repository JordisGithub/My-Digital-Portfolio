import React from "react";
import "./PortfolioItem.css";
import portfolio1 from "../../img/portfolio-01.jpg";
import portfolio2 from "../../img/portfolio-02.jpg";

function PortfolioItem() {
  return (
    <>
      <div className="intro" id="home">
        <h1 className="section__title section__title--intro">
          The title <strong>of my project</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          A short subtitle
        </p>
        <img src={portfolio1} alt="" className="intro__img" />
      </div>

      <div className="portfolio-item-individual">
        <p>
          Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo
          molestiae eligendi sint culpa nobis voluptas sapiente voluptate,
          magnam ipsum eius earum?
        </p>
        <img src={portfolio1} alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et
          amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur
          incidunt?
        </p>
        <p>
          Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo
          molestiae eligendi sint culpa nobis voluptas sapiente voluptate,
          magnam ipsum eius earum?
        </p>
      </div>
    </>
  );
}

export default PortfolioItem;
