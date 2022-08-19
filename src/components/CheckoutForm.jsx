import React, { useContext, useState } from "react";
import { dataContext } from "../App";
//test

const errStyle = { border: "1px solid red" };
const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  message: "",
};

function CheckoutForm({ setToCheckout }) {
  const { dispatch } = useContext(dataContext);
  
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
    let testErr =
      !inputValues.firstname ||
      !inputValues.lastname ||
      !inputValues.email ||
      !inputValues.message;

    if (testErr) {
      setErrorText(true);
    } else {
      setIsSent(true);
      setErrorText(false);
      setInputValue(initialState);
      setTimeout(() => setIsSent(false), 3000);
    }
    }
    
   
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onInput={(e) => {
            setFormData(e);
          }}
          style={errInput.firstname ? errStyle : null}
          value={inputValues.firstname}
          name="firstname"
          type="text"
          placeholder="First name"
        />
        <input
          onInput={(e) => {
            setFormData(e);
          }}
          style={errInput.lastname ? errStyle : null}
          value={inputValues.lastname}
          name="lastname"
          type="text"
          placeholder="Last name"
        />
      
          onInput={(e) => {
            setFormData(e);
          }}
          style={errInput.email ? errStyle : null}
          value={inputValues.email}
          name="email"
          type="email"
          placeholder="Email"
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
        <button onClick={() => { setToCheckout(false); dispatch({ type: "checkout", payload: [] })}}>Submit</button>
        {errorText ? <p>All field are requred</p> : null}
        {isSent ? <p>Message is send.</p> : null}
      </form>
    </>
  );
}

export default CheckoutForm;
