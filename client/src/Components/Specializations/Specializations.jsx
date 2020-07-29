// import React from "react";
import React, { Component } from "react";
import "./Specializations.css";
import ReactDOM from "react-dom";
import ShowMoreText from "react-show-more-text";
// import React from "react";
import "react-accessible-accordion/dist/fancy-example.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from "react-accessible-accordion";

class Specializations extends Component {
  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }
  render() {
    return (
      <>
        <section className="my-specializations" id="specializations">
          <div className="specializations-highlight">
            <h2 className="section__title--services">Specializations</h2>

            <div className="service">
              <h3>Engineering</h3>
              <div className="services">
                <ShowMoreText
                  lines={8}
                  more="Show more"
                  less="Show less"
                  anchorClass="timeline-description-paragraph"
                  onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                >
                  <p>
                    In this digital era, not having a mobile app on popular
                    platforms like Android and iOS means losing out on a huge
                    share of potential customers to competitors who are better
                    equipped to cater to their digital needs. With the current
                    trend suggesting that mobile adoption will significantly
                    rise in the future, this can be the right time to start
                    working on your mobile app. I am a software engineer that
                    has skills in both the front-end and the back-end in app
                    development. I can create a dedicated business app to boost
                    your business, products or services digitally.
                  </p>
                </ShowMoreText>
              </div>

              <div className="service">
                <h3>Business</h3>

                <ShowMoreText
                  lines={8}
                  more="Show more"
                  less="Show less"
                  anchorClass="timeline-description-paragraph"
                  onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                >
                  <p>
                    Nearly every retail and wholesale business is jumping aboard
                    the direct-to-consumer (D2C) bandwagon after stay-at-home
                    orders kept stores closed. Many natively D2C brands have
                    thrived through the business interruption, and traditional
                    wholesale brands are accelerating their plans to adopt this
                    business model. If it wasn’t already apparent that this
                    shift was here to stay, it surely is now. I can help
                    accelerate digitalization and innovation; streamlining the
                    business proposition for consumers and use digital
                    opportunities .
                  </p>
                </ShowMoreText>
              </div>

              <div className="service">
                <h3>Marketing</h3>
                <ShowMoreText
                  lines={8}
                  more="Show more"
                  less="Show less"
                  anchorClass="timeline-description-paragraph"
                  onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                >
                  <p>
                    A marketer who has a business mindset and also knows how to
                    code is rare. I've earned an MBA with a specialization in
                    marketing and have a keen understanding of strategy,
                    research and Customer centric decision making that I bring
                    to development. Producing online traffic via social media,
                    SEO, and even paid search is a great start for a marketing
                    strategy, but certainly not a guarantee that visitors will
                    be performing the action that matters most-- converting to
                    customers. I can help take your marketing strategy beyond
                    this to determine how and where to reach those customers and
                    what offers to make to convert customers on those products
                    increasing the percentage of visitors to your company site
                    who take a desired action — subscribing to a mailing list,
                    filling out a personal information form, registering for a
                    seminar, etc.
                  </p>
                </ShowMoreText>
                {/* is the
                systematic process of 
                
                 Data decision making to reduce the
                risk of those decisions. provide results that aid in product
                development, merchants, sales, marketing. is the systematic
                process of increasing the percentage of visitors to your company
                site who take a desired action — subscribing to a mailing list,
                filling out a personal information form, registering for a
                seminar, etc.
                <p>
                  How important is research and gaining consumer insights in
                  todays environment. Consumer value equations are changing
                  rapidly. Companies should be investing in research now not
                  cutting it. Drives measurable ROI
                <p>
                  Customer centric decision making. Predictive models using
                  customer segmentation data. What products to bring to market,
                  how to price those products, where to reach those customers
                  and what offers to make to convert customers on those
                  products. Data decision making to reduce the risk of those
                  decisions. provide results that aid in product development,
                  merchants, sales, marketing. Price and price elasticity,
                  performance by region.
                </p> */}
                {/* <p>
                  Producing online traffic via social media, SEO, and even paid
                  search is a great start for a marketing strategy, but
                  certainly not a guarantee that visitors will be performing the
                  action that matters most-- converting to customers. For this,
                  we turn our focus on CRO marketing.
                </p>
                CRO marketing, or Conversion Rate Optimization marketing, is the
                systematic process of increasing the percentage of visitors to
                your company site who take a desired action — subscribing to a
                mailing list, filling out a personal information form,
                registering for a seminar, etc.
              </p> */}
              </div>
            </div>

            <a href="#work" className="btn">
              My Work
            </a>
          </div>
        </section>
      </>
    );
  }
}

export default Specializations;
// ReactDOM.render(<Example />, document.querySelector("[data-mount]"));
