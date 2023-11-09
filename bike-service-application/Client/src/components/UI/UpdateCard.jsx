import React, { useState } from "react";
import { Col } from "reactstrap";
import axios from "axios";
import "../../styles/bike-item.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateCard = (props) => {
  const { bikeModel, bikeNumber, bookingStatus, dateOfBooking, userId } =
    props.item;
  const [userName, setName] = useState("");
  const [status, setStatus] = useState(bookingStatus);

  async function updateStatus(serviceId) {
    if (status !== bookingStatus) {
      const body = props.item;
      body.bookingStatus = status;
      const result = await axios.patch(
        `http://localhost:5000/api/booking/${props.item.bookingId}`,
        body
      );
      if (result.status === 200) toast.success("Updated successfully ✔");
    } else toast.error("Something went wrong ❗");
  }

  async function getUser() {
    await axios
      .get(`http://localhost:5000/api/user/${userId}`)
      .then((response) => {
        setName(response.data.data.userName);
      });
  }
  getUser();

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <ToastContainer theme="colored" />
      <div className="car__item">
        <div className="car__item-content mt-4 d-flex flex-column justify-content-center">
          <h4 className="section__title text-center">{bikeModel}</h4>
          <div className="car__item-info d-flex align-items-center mt-2 mb-1">
            <h6 className="section__title text-center">User Name :</h6>
            <p className="mb-2" style={{ marginLeft: "0.5rem" }}>
              {userName}
            </p>
          </div>
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
          <div className="car__item-info d-flex align-items-center mt-1 mb-3">
            <h6 className="section__title text-center">Status :</h6>
            <input
              className="mb-1"
              style={{ marginLeft: "0.5rem", padding: "0rem 0.5rem" }}
              type="text"
              list="data"
              placeholder={bookingStatus}
              onClick={(e) => (e.target.value = "")}
              onChange={(e) => setStatus(e.target.value)}
            />

            <datalist id="data">
              <option value="Service Booked"></option>
              <option value="Ready To Deliver"></option>
              <option value="Completed"></option>
              <option value="Cancelled"></option>
            </datalist>
          </div>
          <button className="btn" onClick={updateStatus}>
            Update
          </button>
        </div>
      </div>
    </Col>
  );
};

export default UpdateCard;
