import { ImLocation } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import Header from "../Header";

import ContactForm from "../ContactForm";

function ContactPage() {
  return (
    <div className="contact-page">
      <Header title="Give us a call" />

      <section className="form_section">
        <ContactForm/>
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
