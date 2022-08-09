/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */

import React from "react";

import celular from "../assets/img/instagram-celular.png";
import logo from "../assets/img/instagram-logo.png";
import profile from "../assets/img/perfil-instagram.jpg";

const Main = () => {
    return (
        <main className="instagram-wrapper">
            <div className="instagram-phone">
                <img src={celular} alt="aplication" />
            </div>

            <div className="instagram-continue">
                <div className="group">
                    <img src={logo} className="instagram-logo" alt="logo"></img>
                    <div className="profile-photo">
                        <img src={profile} alt="foto de perfil"></img>
                    </div>
                    <a href="#" className="instagram-login">
                        Continue as a user_official
                    </a>
                    <a href="#" className="instagram-logout">
                        Remove acount
                    </a>
                </div>

                <div className="group">
                    <p className="not-acount">Aren't user?</p>
                    <p className="not-acount">
                        <span className="link-blue">
                            <a href="#" className="link-blue">
                                Change acount
                            </a>
                        </span>
                        or
                        <span className="link-blue">
                            <a href="#" className="link-blue">
                                Sign Up
                            </a>{" "}
                        </span>
                    </p>
                </div>

                <div className="get-app">
                    <p className="get-app">Get the app</p>
                    <div className="download">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en&gl=US"
                            className="app-download"
                            target="_blank"
                        ></a>
                        <a
                            href="https://apps.apple.com/us/app/instagram/id389801252"
                            className="app-download"
                            target="_blank"
                        ></a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
