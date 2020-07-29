// import React from "react";
import React, { Component } from "react";

// import React from 'react';
import ReactDOM from "react-dom";
import "./Experience.css";
import ShowMoreText from "react-show-more-text";
import "react-accessible-accordion/dist/fancy-example.css";

class Experience extends Component {
  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }
  render() {
    return (
      <>
        <section className="timeline-section" id="experience">
          <h1 className="timeline-heading">
            Professional Experience <span>timeline</span>
          </h1>

          <div class="experience-container">
            <div class="timeline-block timeline-block-right">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>2019 - 2020</h3>
                <ShowMoreText
                  lines={1}
                  more="Show more"
                  less="Show less"
                  anchorClass="timeline-description-paragraph"
                  onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                >
                  <span>Freelance Web Development</span>
                  <br></br>
                  <p>
                    Work with clients to identify software solutions to business
                    challenges. Perform full-stack website launches for clients
                    that specialize in front-end functionality, browser use, and
                    compatibility. Participate in all aspects of agile software
                    development including design, implementation, and
                    deployment. Conduct comprehensive research on the
                    distinctive online behavioral patterns of the client’s
                    existing customer or user base. Develop ideas for the
                    clients’ websites; leveraging technology to deliver business
                    value.
                  </p>
                </ShowMoreText>

                <ShowMoreText
                  lines={1}
                  more="Show more"
                  less="Show less"
                  anchorClass="timeline-description-paragraph"
                  onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                >
                  <span>SOFTWARE ENGINEERING FELLOW, General Assembly.</span>
                  <br></br>
                  <p>
                    Participated in 500+ hours of applied training in software
                    engineering and web development concepts focusing on
                    frontend and backend development. Worked with UX Designers
                    and Software Engineers to create full stack web applications
                    for clients.
                  </p>
                </ShowMoreText>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>(Experience during MBA) 2017 - 2018 </h3>
                <ShowMoreText
                  lines={1}
                  more="Show more"
                  less="Show less"
                  anchorClass="timeline-description-paragraph"
                  onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                >
                  <span>HEC BUSINESS CHALLENGE WITH DISNEY PARIS </span>
                  <br></br>
                  <p>
                    Winner of the Disney Fashion business challenge. Developing
                    a unique retail strategy proposal for the Disney Fashion
                    Paris retail store. Provided a thorough analysis of the
                    Disney fashion business model, brand strategy, product
                    development and merchandising plans
                  </p>
                </ShowMoreText>

                <ShowMoreText
                  lines={1}
                  more="Show more"
                  less="Show less"
                  anchorClass="timeline-description-paragraph"
                  onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                >
                  <span>IXL CONSULTING INNOVATION CHALLENGE</span>
                  <br></br>
                  <p>
                    Winner of the IXL Innovation Olympics, the world’s largest
                    business innovation consulting competition. Consulted a
                    U.A.E business to develop and implement a profitable
                    circular economy business model with a detailed
                    implementation plan timeline, new partner networks,
                    technological implementation, emerging and sustaining
                    trends, competitor analysis and risk assessments. Created
                    profitability model illustrating potentially reaching an
                    increased $6 Million in revenues annually
                  </p>
                </ShowMoreText>
              </div>
            </div>

            <div class="timeline-block timeline-block-right">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>2008 - 2017 (HSBC Bank)</h3>
                <ShowMoreText
                  lines={1}
                  more="Show more"
                  less="Show less"
                  anchorClass="timeline-description-paragraph"
                  onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                >
                  <span>BUSINESS MANAGER.</span>
                  <br></br>
                  <p>
                    Developed, implemented, and maintained a sales tracking
                    database and related analytical reporting protocols.
                    Developer for Credit Pipeline database, Continually
                    performed ongoing enhancements to the database to
                    accommodate business and product updates. Managed credit
                    annual reviews reporting and KPIs. Driving performance
                    management and sales metrics reporting for senior
                    management. Produced high quality presentations and analysis
                    for the various management forums facilitating high quality
                    communication between Regions, Global Businesses and
                    Functions.
                  </p>
                </ShowMoreText>

                <ShowMoreText
                  lines={1}
                  more="Show more"
                  less="Show less"
                  anchorClass="timeline-description-paragraph"
                  onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                >
                  <span>Administrative Analyst</span>
                  <br></br>
                  <p>
                    Served as part of the product development committees for
                    private equity, aircraft, art, hedge funds, intellectual
                    properties and yacht credit products. Developed credit forms
                    to streamline annual review process with risk and credit
                    approval departments. Provided objective analytical client
                    insight to guide the business in decision making. Authored
                    and conceptualized Global digital marketing content, new
                    product pitchbooks and global communication employee
                    strategies. Strengthened employee relationship group
                    (BALANCE) engagement by 800% via strategic digital marketing
                    campaigns and communications strategy.
                  </p>
                </ShowMoreText>

                <ShowMoreText
                  lines={1}
                  more="Show more"
                  less="Show less"
                  anchorClass="timeline-description-paragraph"
                  onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                >
                  <span>Branch Relationship Banker.</span>
                  <br></br>
                  <p>
                    Recognized for top sales performance. Developed a sales plan
                    for each relationship to provide an array of services:
                    personal banking products, investment planning, estate
                    planning, life insurance and credit products. Demonstrate
                    high-level skills and proficiency in sales and retention by
                    consistently growing assigned portfolio quarter over
                    quarter.
                  </p>
                </ShowMoreText>
              </div>
            </div>

            <div class="timeline-block timeline-block-left">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>(JP Morgan Chase Bank) 2007 - 2008 </h3>
                <ShowMoreText
                  lines={1}
                  more="Show more"
                  less="Show less"
                  anchorClass="timeline-description-paragraph"
                  onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                >
                  <span>Relationship Manager</span>
                  <br></br>
                  <p>
                    Acquired and deepened customer relationships by proactively
                    meeting with customers to discover their financial needs and
                    provided product recommendations. Maximized the depth and
                    profitability of the customer's relationship through
                    partnering with sales specialists in lending, small
                    business, investments, and Chase at work
                  </p>
                </ShowMoreText>
              </div>
            </div>

            <div class="timeline-block timeline-block-right">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>2005 - 2007 (Aegis Communication)</h3>
                <ShowMoreText
                  lines={1}
                  more="Show more"
                  less="Show less"
                  anchorClass="timeline-description-paragraph"
                  onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                >
                  <span>Quality Assurance Manager</span>
                  <br></br>
                  <p>
                    Tracked progress of individual associate; recommended
                    performance action plans for associates who are not meeting
                    baseline quality assurance standards. Provided management
                    team with weekly and monthly results of monitoring trends
                    and suggestions improvement. Trained new hires on the
                    quality process. Carried out reward and recognition programs
                    as outlined by the customer campaign.
                  </p>
                </ShowMoreText>
              </div>
            </div>

            <div class="timeline-block timeline-block-left">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>(Artistic Typography) 2003 - 2005 </h3>

                <ShowMoreText
                  lines={1}
                  more="Show more"
                  less="Show less"
                  anchorClass="timeline-description-paragraph"
                  onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                >
                  <span>Graphic Design and Production</span>
                  <br></br>
                  <p>
                    Prepare final press-ready files based on supplied
                    specifications for several types of printing. Prepared final
                    press-ready files based on supplied specifications for
                    several types of printing. Made various formats of supplied
                    artwork production-ready and resolve any artwork issues that
                    arise during production. Provided image retouching, clipping
                    paths and additional image manipulation. Prepare images for
                    online and mobile applications. Troubleshoot problems as
                    they arise with both the creative team and the printer
                  </p>
                </ShowMoreText>
              </div>
            </div>
          </div>
        </section>
        <p className="btn experience-btn">
          <a
            href="https://docdro.id/eRBSl4B"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Resume
          </a>
        </p>
      </>
    );
  }
}

export default Experience;
