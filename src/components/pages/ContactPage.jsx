import React, { useState } from "react";
import Header from "../Header";
import { ImLocation } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const errStyle = { border: "1px solid red" };
const initialState ={
  firstname: "",
  lastname: "",
  email: "",
  message: "",
}

function ContactPage() {
  const [errInput, setErrInput] = useState({
    firstname: false,
    lastname: false,
    email: false,
    message: false,
  });

  const [errorText, setErrorText] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [inputValues, setInputValue] = useState(initialState);

  function setFormData(e) {
    let copyInputValues = { ...inputValues };
    copyInputValues[e.target.name] = e.target.value;
    setInputValue(copyInputValues);
    validateInput(e);
  }

  function validateInput(e) {
    let copyErrInput = { ...errInput };
    copyErrInput[e.target.name] = !e.target.value;
    setErrInput(copyErrInput);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let testErr = !inputValues.firstname || !inputValues.lastname || !inputValues.email || !inputValues.message
    if (testErr) {
      setErrorText(true)
    }else{
      setIsSent(true)
      setErrorText(false)
      setInputValue(initialState)
      setTimeout(() => setIsSent(false),3000)
    }
  }

  return (
    <div className="contact-page">
      <Header title="Give us a call" />

      <section className="form_section">
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e) => {
              setFormData(e);
            }}
            name="firstname"
            type="text"
            placeholder="First name"
            style={errInput.firstname ? errStyle : null}
            value={inputValues.firstname}
            />
          <input
            onInput={(e) => {
              setFormData(e);
            }}
            name="lastname"
            type="text"
            placeholder="Last name"
            style={errInput.lastname ? errStyle : null}
            value={inputValues.lastname}
            />
          <input
            onInput={(e) => {
              setFormData(e);
            }}
            name="email"
            type="email"
            placeholder="Email"
            style={errInput.email ? errStyle : null}
            value={inputValues.email}
            />
          <textarea
            onInput={(e) => {
              setFormData(e);
            }}
            name="message"
            placeholder="your text"
            style={errInput.message ? errStyle : null}
            value={inputValues.message}
          ></textarea>
          <button>Submit</button>
          {errorText ? <p>All field are requred</p> : null}
          {isSent ? <p>Message is send.</p> : null}
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
