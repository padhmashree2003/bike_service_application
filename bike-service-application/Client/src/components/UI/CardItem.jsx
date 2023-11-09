import React, { useState } from "react";
import { Col } from "reactstrap";
import "../../styles/bike-item.css";
import Button from "react-bootstrap/Button";
import { Form, FormGroup } from "reactstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_p7j886a",
      "booking_services",
      e.target,
      "7zV6eXbNZRzsqYSGg"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

const CardItem = (props) => {
  const {
    serviceId,
    serviceName,
    serviceCharge,
    serviceDescription,
    serviceDuration,
  } = props.item;

  const [bikeModel, setModel] = useState("");
  const [bikeNumber, setBikeNumber] = useState("");
  const [email, setUserEmail] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function bookService(serviceId) {
    if (serviceId && bikeModel && bikeNumber) {
      const userId = JSON.parse(localStorage.getItem("userData")).userId;
      const result = await axios.post("http://localhost:5000/api/booking", {
        serviceId,
        userId,
        bikeModel,
        bikeNumber,
        userEmail:email
      });
      if (result.status === 200) toast.success("Booked successfully ✔");
    } else toast.error("Something went wrong ❗");
  }

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <ToastContainer theme="colored" />
      <div className="car__item">
        <div className="car__img">
          <img
            src="https://previews.123rf.com/images/vsvr/vsvr1803/vsvr180300010/97117719-vector-bike-garage-motor-service-logo-motorcycle-engine-renovation-company-sticker-custom.jpg"
            alt=""
            className="w-100"
          />
        </div>

        <div className="car__item-content mt-4 d-flex flex-column justify-content-center">
          <h4 className="section__title text-center">{serviceName}</h4>
          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex gap-1 text-align-justify">
              {serviceDescription}
            </span>
          </div>
          <div className=" d-flex align-items-center justify-content-sm-evenly gap-1">
            <h6 className="rent__price text-center mt-">
              Charge: Rs {serviceCharge}
            </h6>
            <i className="ri-settings-2-line text-justify"></i>
            <h6>Duration: {serviceDuration}</h6>
          </div>

          <button className="btn" onClick={handleShow}>
            Book the service
          </button>
        </div>
      </div>

      {/* Model to get bike info */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bike Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Bike_Make - Bike_Model"
              name="bikeModel"
              onChange={(e) => setModel(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="User_Email - User_Email"
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Bike Number"
              name="bikeNumber"
              onChange={(e) => setBikeNumber(e.target.value)}
              required
            />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              bookService(serviceId);
            }}
          >
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};

export default CardItem;
