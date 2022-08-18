import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import { ImLocation } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

function ContactPage() {
  let error = useRef();
  let firstname = useRef();
  let lastname = useRef();
  let email = useRef();
  let message = useRef();

  const [errorText, setErrorText] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [inputValues, setInputValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  function setFormData(e) {
    let copyInputValues = { ...inputValues };
    copyInputValues[e.target.name] = e.target.value;
    setInputValue(copyInputValues);
  }

  function validateForm(e, input) {
    if (e.target.value === "") {
      input.current.style.border = "1px solid red";
      setErrorText(true);
    } else {
      input.current.style.border = "1px solid black";
      setErrorText(false);
    }

    if (
      inputValues.firstname !== "" &&
      inputValues.firstname.length > 1 &&
      inputValues.lastname !== "" &&
      inputValues.lastname.length > 1 &&
      inputValues.email !== "" &&
      inputValues.email.length > 1 &&
      inputValues.message !== "" &&
      inputValues.message.length > 1
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    firstname.current.value = "";
    lastname.current.value = "";
    email.current.value = "";
    message.current.value = "";
    setDisabled(true);
  }

  return (
    <div className="contact-page">
      <Header title="Give us a call" />

      <section className="form_section">
        <form onSubmit={handleSubmit}>
          <input
            ref={firstname}
            onChange={(e) => {
              setFormData(e);
              validateForm(e, firstname);
            }}
            name="firstname"
            type="text"
            placeholder="First name"
          />
          <input
            ref={lastname}
            onChange={(e) => {
              setFormData(e);
              validateForm(e, lastname);
            }}
            name="lastname"
            type="text"
            placeholder="Last name"
          />
          <input
            ref={email}
            onChange={(e) => {
              setFormData(e);
              validateForm(e, email);
            }}
            name="email"
            type="email"
            placeholder="Email"
          />
          <textarea
            ref={message}
            onChange={(e) => {
              setFormData(e);
              validateForm(e, message);
            }}
            name="message"
            placeholder="your text"
          ></textarea>
          <button disabled={disabled}>Submit</button>
          {errorText ? <p>All field are requred</p> : null}
        </form>

        <div className="contact_info">
          <div className="box-adress">
            <i>
              <ImLocation />
            </i>
            <h3>Address</h3>
            <p>Fift Avenue 500</p>
            <p>NYC</p>
            <p>NY</p>
          </div>
          <div className="box-email">
            <i>
              <AiOutlineMail />
            </i>
            <h3>Email</h3>
            <p>fiftAve@500.com</p>
          </div>
          <div className="box-phone">
            <i>
              <AiOutlinePhone />
            </i>
            <h3>Phone</h3>
            <p> 0800-500-500</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
