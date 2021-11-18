import React from "react";
import "./articles.css"

//Importing images to articles
import imageArticle1 from "../../arquivos/images/image-currency.jpg";
import imageArticle2 from "../../arquivos/images/image-restaurant.jpg";
import imageArticle3 from "../../arquivos/images/image-plane.jpg";
import imageArticle4 from "../../arquivos/images/image-confetti.jpg";

function Articles(){
    return(
        <div id="containerFather">
            <div id="containerArticles">
                <h1>Latest Articles</h1>

                <div id="sectionArticles">
                    <section className="articleBox">
                        <img src={imageArticle1}></img>
                        <div className="divText">
                            <p>By Clains Robson</p>
                            <h4>Receive money in any currency with no fees</h4>
                            <p>The world is getting smaller and we're becomming more mobile. So why should you be forced to only receive money in a single...</p>
                        </div>
                    </section>

                    <section className="articleBox">
                        <img src={imageArticle2}></img>
                        <div className="divText">
                            <p>By Willian Hounston</p>
                            <h4>Treat yourself without worrying about money</h4>
                            <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...</p>
                        </div>
                    </section>

                    <section className="articleBox">
                        <img src={imageArticle3}></img>
                        <div className="divText">
                            <p>By Willian Hounston</p>
                            <h4>Take your Easybank card wherever you go</h4>
                            <p>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...</p>
                        </div>

                    </section>

                    <section className="articleBox">
                        <img src={imageArticle4}></img>
                        <div className="divText">
                            <p>By Clains Robson</p>
                            <h4>Our invite-only Beta accounts are now live!</h4>
                            <p>After a lot of hand work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Articles