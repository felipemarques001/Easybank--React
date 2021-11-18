import React from "react";
import "./footer.css"

//Importing icons to footer
import logo from "../../arquivos/icons/logo.svg";
import facebookIcon from "../../arquivos/icons/icon-facebook.svg";
import youtubeIcon from "../../arquivos/icons/icon-youtube.svg";
import twitterIcon from "../../arquivos/icons/icon-twitter.svg";
import pinterestIcon from "../../arquivos/icons/icon-pinterest.svg";
import instagramIcon from "../../arquivos/icons/icon-instagram.svg";


function Footer(){ 
    return(
        <div id="footerContainer">
            <div id="leftContainer">
                <img src={logo} id="logo"></img>
                <ul id="ulIcons">
                    <li><a href="#"><img src={facebookIcon}></img></a></li>
                    <li><a href="#"><img src={youtubeIcon}></img></a></li>
                    <li><a href="#"><img src={twitterIcon}></img></a></li>
                    <li><a href="#"><img src={pinterestIcon}></img></a></li>
                    <li><a href="#"><img src={instagramIcon}></img></a></li>
                </ul>
            </div>

            <div id="middleContainer">
                <nav>
                    <ul id="UlFooter1">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    <ul id="ulFooter2">
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </nav>
            </div>

            <div id="rightContainer">
                <button id="footerBnt">Request Invite</button>
                <p>Easybank. All rights Reserved</p>
            </div>
        </div>
    )
    
}

export default Footer