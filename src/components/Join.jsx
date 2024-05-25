import React, { useRef } from "react";
import "../styles/Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mb1jkis", "template_ynsq09g", form.current, {
        publicKey: "Cwk-Zmng5QAIerDgd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div className="Join" id="join-us">
        <div className="left-j">
          <hr />
          <div>
            <span className="stroke-text">READY TO </span>
            <span>LEVEL UP </span>
          </div>
          <div>
            <span>YOUR BODY </span>
            <span className="stroke-text">WITH US?</span>
          </div>
        </div>
        <div className="right-j">
          <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your Email address"
            />
            <button className="btn btn-j">Join now</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Join;
