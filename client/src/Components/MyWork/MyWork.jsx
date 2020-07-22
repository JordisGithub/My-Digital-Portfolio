import React from "react";
import "./MyWork.css";

export default function MyWork() {
  return (
    <>
      <section className="my-work" id="work">
        <h2 className="section__title">My work</h2>
        <p className="section__subtitle">A selection of my range of work</p>

        <div className="portfolio">
          {/* Portfolio item 1 */}
          <div className="portfolio-item">
            <div className="portfolio-item-title">
              Sustainable Fashion Scorecards
            </div>

            <div className="porfolioitem-image-container">
              <img
                src="https://i.imgur.com/kY9n97B.png"
                alt=""
                className="portfolio__img"
              />
            </div>

            <div className="portfolio-description">
              <h1 className="portfolio-item-tagline">
                sustainability scorecards ratings on your favorite designers.
                <br />
                Yup there's an app for that!
              </h1>
              <div className="portfolio-item-longdescription">
                Sustainably Chic operates as a marketplace for mid to high
                market sustainable brands. We also include a sustainability
                score rating model to rate the brands and provide full
                transparency around the sustainability impact and rating factors
                of your favorite outfit and designers. Think of it as the
                ultimate Plattform of sustainable shopping with sustainability
                scorecards and might I add very POSH look ideas!
                {/* <p className="longdexcription-bullet"></p> */}
              </div>
            </div>

            <div className="portfolio-techused">
              <h6>TECHNOLOGIES USED</h6>
              <div className="techused-details">
                <p>Ruby</p>
                <p>React</p>
                <p>Rails</p>
                <p>JSX</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p></p>
              </div>
            </div>

            <div className="portfolio-dependencies">
              <h6>Dependencies</h6>
              <div className="dependencies-details">
                <p>Axios</p>
                <p>React</p>
                <p>bcrypt</p>
                <p>jsonwebtoken</p>
                <p>sequelize</p>
                <p>Nodemon</p>
                {/* <p>cors</p> */}
                {/* <p>body-parser</p> */}
                <p></p>
              </div>
            </div>

            <div className="portfolio-links">
              <a
                href="https://sustainable-fashion-app.herokuapp.com/"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Live Site
              </a>
              <a
                href="https://github.com/JordisGithub/sustainable-fashion-hub"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Code
              </a>
            </div>
          </div>

          {/* Portfolio item 2 */}
          <div className="portfolio-item">
            <div className="portfolio-item-title">
              E-Commerce Progressive Webapp
            </div>

            <div className="porfolioitem-image-container">
              <img
                src="https://i.imgur.com/8v4WqTJ.jpg"
                alt=""
                className="portfolio__img"
              />
            </div>

            <div className="portfolio-description">
              <h1 className="portfolio-item-tagline">
                Jewlery E-commerce App. Personally designed branding, wireframes
                and marketing strategy
              </h1>
              <div className="portfolio-item-longdescription">
                Supernova Gems is a high end jewlery e-commerce platform. This
                e-Commerce was built to increase your sales, build customer
                loyalty, and give the business a competitive advantage. Built in
                features that facilitate the buyer’s journey, deliver a great
                user experience (UX), and ensure that making a purchase is
                smooth and easy. Features included are: Easy login &
                registration, User-friendly product filtering and sorting,
                Detailed product descriptions, Product gallery, and admin
                authentication to edit, add and delete products seamlessly.
              </div>
            </div>

            <div className="portfolio-techused">
              <h6>TECHNOLOGIES USED</h6>
              <div className="techused-details">
                <p>Ruby</p>
                <p>React</p>
                <p>Rails</p>
                <p>JSX</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p></p>
              </div>
            </div>

            <div className="portfolio-dependencies">
              <h6>Dependencies</h6>
              <div className="dependencies-details">
                <p>Axios</p>
                <p>React</p>
                <p>bcrypt</p>
                <p>jsonwebtoken</p>
                <p>sequelize</p>
                <p>Nodemon</p>
                {/* <p>cors</p> */}
                {/* <p>body-parser</p> */}
                <p></p>
              </div>
            </div>

            <div className="portfolio-links">
              <a
                href="https://supernova-gems.netlify.app/"
                rel="noopener noreferrer"
                className="btn"
                target="_blank"
              >
                See Live Site
              </a>
              <a
                href="https://github.com/JordisGithub/supernova-gems"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Code
              </a>
            </div>
          </div>

          {/* Portfolio item 3 */}
          <div className="portfolio-item">
            <div className="portfolio-item-title">Restaurant Website</div>

            <div className="porfolioitem-image-container">
              <img
                src="https://i.imgur.com/1e7OOK6.png"
                alt=""
                className="portfolio__img"
              />
            </div>

            <div className="portfolio-description">
              <h1 className="portfolio-item-tagline">
                Beautifully Built Restaurant Progressive Web Appp with
                minimalist design.
              </h1>
              <div className="portfolio-item-longdescription">
                This restaurant website was built to highlight how to
                effectively improve the business's outreach, build a larger
                customer base and a solid brand image. With Search Engine
                optimization in mind features to showcase the dining experience
                included are: Restaurant information, Food and drinks menu,
                Clear Contact and Visiting Information, A delivery map An “about
                us” page, A gallery of pictures to show off your foods and
                drinks online ordering, menu pictures, gift card sales, customer
                testimonials and social media integration.
              </div>
            </div>

            <div className="portfolio-techused">
              <h6>TECHNOLOGIES USED</h6>
              <div className="techused-details">
                <p>React</p>
                <p>Rails</p>
                <p>JSX</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>
            </div>

            <div className="portfolio-dependencies">
              <h6>Dependencies</h6>
              <div className="dependencies-details">
                <p>React</p>
                <p>Axios</p>
                <p>react-router-dom</p>
              </div>
            </div>

            <div className="portfolio-links">
              <a
                href="https://chikalicious.surge.sh/"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Live Site
              </a>
              <a
                href="https://github.com/JordisGithub/chikalicious"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Code
              </a>
            </div>
          </div>

          {/* Portfolio item 4 */}
          <div className="portfolio-item">
            <div className="portfolio-item-title">Fashion Blog</div>

            <div className="porfolioitem-image-container">
              <img
                src="https://github.com/JordisGithub/fashion-app/blob/master/src/Images/Wireframe.png?raw=true"
                alt=""
                className="portfolio__img"
              />
            </div>

            <div className="portfolio-description">
              <h1 className="portfolio-item-tagline">
                Beautiful Fashion Blog focused on sustainability in the industry
              </h1>
              <div className="portfolio-item-longdescription">
                Modern consumers have a growing global consciousness, and they
                care about social and environmental responsibility. This
                Sustainable fashion blog was designed with full resources for
                eco-conscious fashion consumers. This includes a realtime
                commenting feature to capture feedback and ideas from users
                visiting the site. Project Features curated audience based
                content: Fast Fashion is #Cancelled - the real cost of cheap
                fast garments, Sustainable Fashion brands we love, Fashion
                footprint calculator, Fashion swaps are the new brunch, Level up
                your Laundry game and Rent your wardrobe section.
              </div>
            </div>

            <div className="portfolio-techused">
              <h6>TECHNOLOGIES USED</h6>
              <div className="techused-details">
                <p>React</p>
                <p>Rails</p>
                <p>JSX</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>
            </div>

            <div className="portfolio-dependencies">
              <h6>Dependencies</h6>
              <div className="dependencies-details">
                <p>React</p>
                <p>Axios</p>
                <p>react-router-dom</p>
              </div>
            </div>

            <div className="portfolio-links">
              <a
                href="https://sustainable-fashion-movement.netlify.app/#/"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Live Site
              </a>
              <a
                href="https://github.com/JordisGithub/fashion-app"
                className="btn"
                target="_blank"
              >
                See Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
