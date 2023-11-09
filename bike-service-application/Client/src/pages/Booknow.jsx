import React, { useState } from "react";
import axios from "axios";
import { Form, FormGroup } from "reactstrap";

async function bookService(serviceId) {
  const userId = JSON.parse(localStorage.getItem("userData")).userId;
  const result = await axios.post("http://localhost:5000/api/booking", {
    serviceId,
    userId,
  });
  console.log(result);
}

function Booknow() {
  return (
    <Form className="form" onSubmit={() => console.log("asdasd")}>
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input
            type="text"
            placeholder="Bike Model"
            name="bikeModel"
            required
          />
        </FormGroup>
        <FormGroup className="form__group">
          <input
            type="text"
            placeholder="Bike Number"
            name="bikeNumber"
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="text"
            placeholder=" Mobile No"
            name="mobileNo"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select name="service">
            <option value="ac">Services</option>
            <option value="service">general service checkup</option>
            <option value="non-ac">oil change</option>
            <option value="non-ac">Water wash</option>
            <option value="non-ac">Brake services</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button onClick={() => bookService()}>Book now</button>
        </FormGroup>
      </div>
    </Form>
  );
}

export default Booknow;
