import React from "react";
import "./Hero.css";
import Heroe from "./images/Heroe.svg";

const Hero = () => {
    return (

      <div class="container banner-column">
         <img src={Heroe} alt="hero" />
         <div class="banner-inner">
            <h1 class="heading-xl">All Your Files in One Secure Location.</h1>
            <p class="paragraph">
               We stores all your most important files in one secure location.
               Access them whenever needed, share and collaborate with
               your connections.
            </p>
            <button class="btn btn-darken btn-inline">
               Get Started<i class="bx bx-right-arrow-alt"></i>
            </button>
         </div>
      </div>

    );
};

export default Hero;