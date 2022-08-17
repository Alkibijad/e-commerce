import React from "react";
import Header from "../Header";
import { ImLocation } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

function ContactPage() {
  return (
    <div className="contact-page">
      <Header title="Give us a call" />

      <section className="form_section">
        <form>
          <input name="firstname" type="text" placeholder="First name" />
          <input name="lastname" type="text" placeholder="Last name" />
          <input name="email" type="email" placeholder="Email" />
          <textarea name="message" id=""   placeholder="your text"></textarea>
          <button>Submit</button>
          <p>All field are requred</p>
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
            <i><AiOutlineMail /></i>
            <h3>Email</h3>
            <p>fiftAve@500.com</p>

          </div>
          <div className="box-phone">
            <i><AiOutlinePhone /></i>
            <h3>Phone</h3>
            <p> 0800-500-500</p>

          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
