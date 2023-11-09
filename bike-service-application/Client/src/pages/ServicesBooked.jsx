import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ListBookedServices from "../components/UI/ListBookedServices";

const ServicesBooked = () => {
  let [services, setServices] = useState([]);

  async function fetchData() {
    const userId = JSON.parse(localStorage.getItem("userData")).userId;
    await axios
      .get(`http://localhost:5000/api/booking/user/${userId}`)
      .then((response) => {
        services = response.data.data;
        setServices(services);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Helmet title="Services">
      <CommonSection title="Services Booked" />

      <section>
        <Container>
          <Row>
            {services.map((item) => {
              return <ListBookedServices item={item} key={item.serviceId} />;
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ServicesBooked;
