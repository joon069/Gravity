import PropTypes from "prop-types";
import React from "react";
import { Navigation } from "./Navigation";
import "./NavigationV.css";

export const NavigationV = ({
    property1,
    className,
    navigationVector = "vector-4.svg",
    navigationImg = "vector-5.svg",
    navigationVector1 = "vector-3.svg",
    navigationUnion = "union-2.svg",
}) => {
    return (
        <div className={`navigation-v ${className || ""}`}>
            <Navigation
                buttonClassName="navigation-v-instance"
                className="navigation-v2"
                divClassName="navigation-instance"
                img={navigationVector}
                union={navigationUnion}
                vector={navigationVector1}
                vector1={navigationImg}
            />
        </div>
    );
};

NavigationV.propTypes = {
    property1: PropTypes.oneOf(["default"]),
    navigationVector: PropTypes.string,
    navigationImg: PropTypes.string,
    navigationVector1: PropTypes.string,
    navigationUnion: PropTypes.string,
};
