import React from "react";
import logo from "../../arquivos/icons/logo.svg"
import "./header.css"
import hamburguerIcon from "../../arquivos/icons/icon-hamburger.svg"

function Header(){
    return(
        <header>
            <nav>
                <img src={logo}></img>
                <ul id="ulHeader">
                    <li><a src='#' className="link">Home</a></li>
                    <li><a src='#' className="link">About</a></li>
                    <li><a src='#' className="link">Contact</a></li>
                    <li><a src='#' className="link">Blog</a></li>
                    <li><a src='#' className="link">Careers</a></li>
                </ul>
                <img src={hamburguerIcon} id="hamburger"></img>
                <button id="headerBtn">Request Invite</button>
            </nav>
        </header>
    )
}

export default Header