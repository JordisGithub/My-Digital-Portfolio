import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function Example() {
  return (
    <>
      <section className="my-specializations" id="specializations">
        <div className="specializations-highlight">
          <h2 className="section__title--services">Specializations</h2>
          <Accordion allowZeroExpanded>
            {/* ================================================
      ============Item 1==============================
      ================================================ */}
            <div className="service">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {" "}
                    <h3>Engineering</h3>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
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
                </AccordionItemPanel>
              </AccordionItem>
            </div>

            {/* ================================================
      ============Item 2==============================
      ================================================ */}
            <div className="service">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <h3>Marketing</h3>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
              </AccordionItem>
            </div>

            {/* ================================================
      ============Item 3==============================
      ================================================ */}

            <div className="service">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <h3>Marketing</h3>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
              </AccordionItem>
            </div>
          </Accordion>
          <a href="#work" className="btn">
            Recent Projects
          </a>
        </div>
      </section>
    </>
  );
}
//
