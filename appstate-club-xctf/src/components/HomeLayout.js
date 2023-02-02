//Tools
import React from "react";
//Components
import Header from "./Header";
//Styles
import classes from "./HomeLayout.module.scss";

const HomeLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={classes.container}>{children}</div>
        </>
    );
};

export default HomeLayout;