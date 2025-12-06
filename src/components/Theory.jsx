
import React from "react";
import { Button } from "./Button";
import { ButtonPrimaryWith } from "./ButtonPrimaryWith";
import { NavigationV } from "./NavigationV";
import { Arrow } from "./Arrow";
import "./Theory.css";

export const Theory = () => {
    return (
        <div className="theory">
            <NavigationV
                className="navigation-v1"
                navigationImg="vector-5.svg" // Using existing vector for now, icon change via prop if supported or css override
            />

            {/* Mainpage Section - Hero */}
            <div className="mainpage">
                <div className="content">
                    <div className="div">
                        <p className="text-wrapper">Meet the New Gravity Platform</p>
                        <p className="gravity-gives-you">
                            Gravity gives you the tools &amp; simulations you need to explore
                            gravitational physics and unlock the mysteries of the universe.
                        </p>
                    </div>

                    <ButtonPrimaryWith
                        className="button-primary-with-icon"
                        divClassName="button-primary-with-instance"
                        hasIcon={false}
                        text="GET STARTED"
                    />
                </div>

                <Arrow />
            </div>

            <div className="frame-4">
                <div className="frame-5">
                    <div className="text-wrapper-6">Black Hole</div>
                </div>
            </div>

            <div className="featured-news">
                <div className="featured-news-2">
                    <div className="text-wrapper-7">Featured News</div>

                    <div className="inform-pic">
                        <div className="frame-6">
                            <div className="text-wrapper-8">ARTICLE</div>
                            <p className="text-wrapper-9">
                                NASA's Traveler: Field Guide to Social Supermassive Black Holes
                            </p>
                        </div>

                        <div className="frame-7">
                            <div className="text-wrapper-8">ARTICLE</div>
                            <p className="text-wrapper-10">
                                Is Our Universe Inside a Black Hole?
                            </p>
                        </div>

                        <div className="frame-8">
                            <div className="text-wrapper-11">BLOG</div>
                            <p className="text-wrapper-12">
                                What's Inside a Black Hole? : r/space
                            </p>
                        </div>

                        <div className="frame-9">
                            <div className="text-wrapper-13">ARTICLE</div>
                            <p className="text-wrapper-12">
                                Black Hole Field Guide: Episode 1 - Basic Black Holes
                            </p>
                        </div>
                    </div>

                    <div className="inform">
                        <div className="frame-10">
                            <div className="frame-11">
                                <div className="ellipse" />
                                <p className="text-wrapper-14">
                                    Oly One: Redefining DeFi with the Blackhole Burn Mechanism
                                </p>
                            </div>
                            <div className="text-wrapper-15">ARTICLE</div>
                        </div>

                        <div className="frame-10">
                            <div className="frame-11">
                                <div className="ellipse" />
                                <p className="text-wrapper-14">
                                    Gravitational Waves: A New Window to the Universe
                                </p>
                            </div>
                            <div className="text-wrapper-15">BLOG</div>
                        </div>

                        <div className="frame-10">
                            <div className="frame-11">
                                <div className="ellipse" />
                                <p className="text-wrapper-14">
                                    The Event Horizon: Point of No Return
                                </p>
                            </div>
                            <div className="text-wrapper-15">BLOG</div>
                        </div>

                        <div className="frame-10">
                            <div className="frame-11">
                                <div className="ellipse" />
                                <p className="text-wrapper-14">
                                    Hawking Radiation: Black Holes Aren't So Black
                                </p>
                            </div>
                            <div className="text-wrapper-15">NEWS RELEASE</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
