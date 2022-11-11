import React from 'react'
import Logo from "../../assets/logo.png"
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    LinkIcon,
    UsersIcon,
} from "@heroicons/react/outline";

import css from './Footer-module.css';


const Footer = () => {
  return (
    <div className="cFooterWrapper">
        <hr/>
        <div className="cFooter">
            <div className="logo">
                <img src={Logo} alt="" />
                <span>BSFzon</span>
            </div>

            <div className="block">
                <div className="detail">
                    <span>Contact Us</span>
                    <span className="pngLine">
                        <LocationMarkerIcon className="icon"/>
                        <span>H.No. 485/1, at Pathri, Tq. Parbhani, Dist.</span>
                    </span>

                    <span className="pngLine">
                        {" "}
                        <PhoneIcon className="icon"/>
                        <a href="tel:+91-9527-916-590">952-791-6590</a>
                    </span>

                    <span className="pngLine">
                        <InboxIcon className="icon" />
                        <a href="mailto:farooquishaker10@gmail.com">farooquishaker10@BSFzon.com</a>
                    </span>
                </div>
            </div>

            <div className="block">
                <div className="detail">
                    <span>Company</span>
                    <span className="pngLine">
                        <UsersIcon className="icon" />
                        <a href="/about">
                            <p>About us</p>
                        </a>
                    </span>
                </div>
            </div>

            <div className="block">
                <div className="detail">
                    <span>Resources</span>
                    <span className="pngLine">
                        <LinkIcon className="icon"/>
                        <p>Safety Privacy & Terms</p>
                    </span>
                </div>
            </div>
        </div>

        <div className="copyRight">
            <span>CopyRight 2022 by BSFzon</span>
            <span>All right reserved</span>
        </div>
    </div>
  );
};

export default Footer;