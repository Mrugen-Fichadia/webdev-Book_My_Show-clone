import React from "react";
import Navbar from "../components/navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousel/HeroCaurosel.component";

const DefaultLayout = (props) => {
    return (
    <>
        <Navbar />
        <HeroCarousal />
        {props.children}
    </>
    );
};

export default DefaultLayout;