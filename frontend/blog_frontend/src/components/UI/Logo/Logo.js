import React from "react";
import { Link } from "react-router-dom";
import HamburgerIcon from "../../../assets/images/Logo.png";
import cssClass from "./Logo.css";

const logo = () => (
    <Link style={{ textDecoration: "none" }} to="/">
       <img className={cssClass.Logo} src = {HamburgerIcon}/>
        {/* <img  src = "hamburger.png"/> */}
    </Link>
);

export default logo;
