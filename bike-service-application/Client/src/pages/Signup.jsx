import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [userName, setuserName] = useState("");
  const [eMail, setmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const submitHandler = async () => {
    if (!userName || !eMail || !Mobile || !password || !cpassword) {
      window.alert("Fill all the required fields before submit ❗");
    } else if (password !== cpassword) {
      window.alert("Password not matched ❗");
    } else {
      const userData = {
        userName,
        passWord: password,
        mailId: eMail,
        mobileNo: Mobile,
      };
      try {
        const response = await axios.post(
          "http://localhost:5000/api/user/signup",
          userData
        );
        window.location = "/login";
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <>
      <div className="rows d-md-flex h-md-100 align-content-center justify-content-center">
        <div className="col-md-4 h-md-100 text-center  p-10 m-0">
          <div
            className="p-5"
            style={{
              backgroundColor: "rgba(239, 239, 239, 1)",
            }}
          >
            <h2 className="m-2" style={{ fontSize: "35px" }}>
              SignUp
            </h2>
            <input
              type="text"
              required
              placeholder="User Name"
              className="mb-2 form-control  d-inline-flex p-2 "
              value={userName}
              onChange={(e) => {
                setuserName(e.target.value);
              }}
            />

            <input
              type="email"
              required
              placeholder="Email id"
              className="mb-2 form-control d-inline-flex p-2"
              value={eMail}
              onChange={(e) => {
                setmail(e.target.value);
              }}
            />

            <input
              type="tel"
              required
              placeholder="Mobile Number"
              className="mb-2 form-control d-inline-flex p-2"
              value={Mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />

            <input
              type="password"
              required
              placeholder="Password"
              className="mb-2 form-control d-inline-flex p-2"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <input
              type="password"
              required
              placeholder="Confirm Password"
              className="mb-2 form-control d-inline-flex p-2"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />

            <button className="btn mt-2" onClick={submitHandler}>
              SignUp
            </button>

            <p
              className="m-2"
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                padding: "5px",
                fontWeight: "bold",
              }}
            >
              {" "}
              Already User? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
