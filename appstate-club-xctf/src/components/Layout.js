//Tools
import React from "react";
//Components
import Header from "./Header";
//Styles
import classes from "./Layout.module.scss";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={classes.container}>{children}</div>
            <div className={classes.casual}>{children}</div>
            <div className={classes.competitive}>{children}</div>
        </>
    );
};


export default Layout;