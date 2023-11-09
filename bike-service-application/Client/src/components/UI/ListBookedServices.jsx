import React, { useState } from "react";
import { Col } from "reactstrap";
import "../../styles/bike-item.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListBookedServices = (props) => {
  const { bikeModel, bikeNumber, bookingStatus, dateOfBooking } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <ToastContainer theme="colored" />
      <div className="car__item">
        <div className="car__item-content mt-4 d-flex flex-column justify-content-center">
          <h4 className="section__title text-center">{bikeModel}</h4>
          <div className="car__item-info d-flex align-items-center mt-2 mb-1">
            <h6 className="section__title text-center">Bike Number :</h6>
            <p className="mb-2" style={{ marginLeft: "0.5rem" }}>
              {bikeNumber}
            </p>
          </div>
          <div className="car__item-info d-flex align-items-center mt-1 mb-1">
            <h6 className="section__title text-center">Booking Date :</h6>
            <p className="mb-2" style={{ marginLeft: "0.5rem" }}>
              {new Date(dateOfBooking).toLocaleDateString()}
            </p>
          </div>
          <div className="car__item-info d-flex align-items-center mt-1 mb-1">
            <h6 className="section__title text-center">Booking Status :</h6>
            <p
              className="mb-2"
              style={{ marginLeft: "0.5rem", textTransform: "capitalize" }}
            >
              {bookingStatus}
            </p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ListBookedServices;
