import React from "react";
import arrowDown from '../public/arrow-down.svg';
import "./Arrow.css";

export const Arrow = ({ className }) => {
    return (
        <div className={`arrow-container ${className || ""}`}>
            <div className="arrow-circle">
                <img src={arrowDown} className="arrow-icon" alt="Scroll down arrow" />
            </div>
            <div className="scroll-text">Scroll down</div>
        </div>
    );
};
