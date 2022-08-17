import React from "react";
import Logo from "./Logo";
import MenuList from "./MenuList";

function Footer() {
  return (
    <div className="footer">

      <Logo />
      <h3>Site Map</h3>
      <h3>Address</h3>


      <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, itaque.</p>
      <MenuList navbar={"footer_menu"} />
      <div className="">
          <ul className="list-group">
            <li>Street: Address here</li>
            <li>Email: office@techshop.com</li>
            <li>Phone: +012 345 6789</li>
            <li>Phone: +012 345 6789</li>
          </ul>
        </div>
          

    </div>
  );
}

export default Footer;
