import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
    const [selectedInfo, setSelectedInfo] = useState("Quienes Somos");
    const [fade, setFade] = useState(false);

    const handleButtonClick = (info) => {
        setFade(true);
        setTimeout(() => {
            setSelectedInfo(info);
            setFade(false);
        }, 300);
    };

    return (
        <div className="container">
            <div className="row">
                <ul className="button-list">
                    <li><button onClick={() => handleButtonClick("Quienes Somos")}>Quienes Somos</button></li>
                    <li><button onClick={() => handleButtonClick("Mision")}>Mision</button></li>
                    <li><button onClick={() => handleButtonClick("Vision")}>Vision</button></li>
                    <li><button onClick={() => handleButtonClick("Historia")}>Historia</button></li>
                </ul>
            </div>
            <div className={`info-container ${fade ? 'fade' : ''}`}>
                <div className="info">
                    {selectedInfo === "Quienes Somos" && (
                        <div>
                            <h2>Quienes Somos</h2>
                            <p>Información sobre quienes somos.</p>
                        </div>
                    )}
                    {selectedInfo === "Mision" && (
                        <div>
                            <h2>Mision</h2>
                            <p>Nuestra misión es...</p>
                        </div>
                    )}
                    {selectedInfo === "Vision" && (
                        <div>
                            <h2>Vision</h2>
                            <p>Nuestra visión es...</p>
                        </div>
                    )}
                    {selectedInfo === "Historia" && (
                        <div>
                            <h2>Historia</h2>
                            <p>Nuestra historia comenzó...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default About;
