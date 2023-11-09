import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CardItem from "../components/UI/CardItem";

const ServiceListing = () => {
  let [services, setServices] = useState([]);
  async function fetchData() {
    await axios.get("http://localhost:5000/api/service").then((response) => {
      services = response.data.data;
      setServices(services);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Helmet title="Services">
      <CommonSection title="Service Listing" />

      <section>
        <Container>
          <Row>
            {services.map((item) => {
              return <CardItem item={item} key={item.serviceId} />;
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ServiceListing;
