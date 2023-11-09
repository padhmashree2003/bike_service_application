import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const [email, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [Error, seterror] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userData") != null) {
      window.location.href = "/";
      console.log("first");
    }
  });

  const errorHandler = () => {
    seterror(true);
  };

  const notifyErr = () => toast.error("Invalid credentials ❗");

  const submitHandler = async () => {
    if (!email || !password) {
      window.alert("Fill all the required fields before submit ❗");
    } else {
      const userData = {
        mailId: email,
        passWord: password,
      };
      try {
        const response = await axios.post(
          "http://localhost:5000/api/user/login",
          userData
        );
        localStorage.setItem("userData", JSON.stringify(response.data.data));

        window.location.href = "/";
      } catch (error) {
        notifyErr();
        errorHandler();
        console.log(error.response.data);
      }
    }
  };

  return (
    <>
      <ToastContainer theme="colored" />
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="col-md-6 col-sm-8 text-center p-5"
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div
            className="shadow-lg p-5"
            style={{
              backgroundColor: "rgba(170, 223, 255, 1)",
              borderRadius: "10px",
            }}
          >
            <h2
              className="m-3"
              style={{ fontSize: "30px", fontWeight: "bold" }}
            >
              Login
            </h2>
            <div
              style={{
                height: "max-content",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                alignContent: "space-around",
                justifyContent: "space-between",
              }}
            >
              <input
                type="email"
                className="form-control"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setmail(e.target.value);
                }}
              />
              <br />
              <input
                type="password"
                required
                placeholder="Password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <br />
              <button className="btn" onClick={submitHandler}>
                <b>Login</b>
              </button>
              <br />
              <p
                className="m-1"
                style={{
                  fontSize: "18px",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  padding: "5px",
                  fontWeight: "bolder",
                }}
              >
                New User? <Link to="/signup">Create Account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
