import React from "react";
import "./presentation.css"
import cellphone from "../../arquivos/images/image-mockups.png"

function Presentation(){
    return(
    <div id="container">
        <section id="textSection">
            <h1>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will bea one-stop-shop for spending, saving, budgeting, investing, and much more.
            </p>
            <button id="presentationBtn">Request Invite</button>
        </section>
        <section id="cellphoneSection">
            <img src={cellphone} className="img" id="cellphone"></img>
        </section>
    </div>
    )
}

export default Presentation