import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/bike-img/2.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "0px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content"> 
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Bike service</h2>
              <p className="section__description">
              Our companies provide a wide range of essential services to keep bicycles in optimal condition.
               These services encompass basic tune-ups, full tune-ups, wheel truing, brake maintenance, and drivetrain cleaning and lubrication. 
               They also offer specialized services like flat tire repair, frame inspections, suspension maintenance for mountain bikes, custom bike builds, accessory installation, and even electronic drivetrain diagnostics for high-end bikes.
                In addition,some shops may provide bike fitting services to ensure the bicycle is properly adjusted to the rider's body for maximum comfort and efficiency.
                 Overall, these comprehensive services help cyclists enjoy a safe and enjoyable riding experience while extending the lifespan of their bikes.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description section__description__50 d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> General service check-up.
                </p>

                <p className="section__description section__description__50 d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> oil change.
                  
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description section__description__50 d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Water wash and air checking.
                  
                </p>

                <p className="section__description section__description__50 d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> brake services and wheel tuning.
                  
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
