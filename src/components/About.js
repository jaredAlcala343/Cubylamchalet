import React, { useState } from "react";
import "./About.css";
import QuienesSomosImg from "./images/Heroe.jpg";
import MisionImg from "./images/Heroe.jpg";
import VisionImg from "./images/Heroe.jpg";

function About() {
    const [activeTab, setActiveTab] = useState("quienesSomos");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="about-container">
            <div className="tabs">
                <button onClick={() => handleTabClick("quienesSomos")} className={activeTab === "quienesSomos" ? "active" : ""}>
                    Quienes Somos
                </button>
                <button onClick={() => handleTabClick("mision")} className={activeTab === "mision" ? "active" : ""}>
                    Misión
                </button>
                <button onClick={() => handleTabClick("vision")} className={activeTab === "vision" ? "active" : ""}>
                    Visión
                </button>
                <button onClick={() => handleTabClick("historia")} className={activeTab === "historia" ? "active" : ""}>
                    Historia
                </button>
            </div>
            <div className="content">
                {activeTab === "quienesSomos" && (
                    <div className="tab-content fade-in">
                        <div className="content-left">
                            <h2>Quienes Somos</h2>
                            <p>
                                Somos una empresa dedicada a...
                            </p>
                        </div>
                        <div className="content-right">
                            <img src={QuienesSomosImg} alt="Quienes Somos" />
                        </div>
                    </div>
                )}
                {activeTab === "mision" && (
                    <div className="tab-content fade-in">
                        <div className="content-left">
                            <h2>Misión</h2>
                            <p>
                                Nuestra misión es...
                            </p>
                        </div>
                        <div className="content-right">
                            <img src={MisionImg} alt="Misión" />
                        </div>
                    </div>
                )}
                {activeTab === "vision" && (
                    <div className="tab-content fade-in">
                        <div className="content-left">
                            <h2>Visión</h2>
                            <p>
                                Nuestra visión es...
                            </p>
                        </div>
                        <div className="content-right">
                            <img src={VisionImg} alt="Visión" />
                        </div>
                    </div>
                )}
                {activeTab === "historia" && (
                    <div className="tab-content fade-in">
                        <div className="content-left">
                            <h2>Historia</h2>
                            <p>
                                Nuestra historia comienza...
                            </p>
                        </div>
                        <div className="content-right">
                            <video controls>
                                <source src="historia.mp4" type="video/mp4" />
                                Tu navegador no soporta la etiqueta de video.
                            </video>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default About;
