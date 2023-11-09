import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import UpdateCard from "../components/UI/UpdateCard";

const UpdateBooking = () => {
  let [services, setServices] = useState([]);

  async function fetchData() {
    const userId = JSON.parse(localStorage.getItem("userData")).userId;
    await axios.get(`http://localhost:5000/api/booking`).then((response) => {
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
              return <UpdateCard item={item} key={item.bookingId} />;
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default UpdateBooking;
