import React from "react";
import "./about.css";

//Importing icons to cards
import onlineIcon from "../../arquivos/icons/icon-online.svg";
import budgetingIcon from "../../arquivos/icons/icon-budgeting.svg";
import onboardingIcon from "../../arquivos/icons/icon-onboarding.svg";
import apiIcon from "../../arquivos/icons/icon-api.svg";


function About(){
    return(
        <div className="container">
            <section id="textAbout">
                <h1>Why choose Easybank?</h1>
                <p>We levarege Open Banking to turn your bank account into your financial hub. Control your finances like niver before.</p>
            </section>
            <section id="cards">
                <div className="card">
                    <img src={onlineIcon}></img>
                    <h4>Online Banking</h4>
                    <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>
                <div className="card">
                    <img src={budgetingIcon}></img>
                    <h4>Simple Budgeting</h4>
                    <p>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>
                </div>
                <div className="card">
                    <img src={onboardingIcon}></img>
                    <h4>Fast Onboarding</h4>
                    <p>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>
                <div className="card">
                    <img src={apiIcon}></img>
                    <h4>Open API</h4>
                    <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                </div>
            </section>
        </div>
    )
};

export default About