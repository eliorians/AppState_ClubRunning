//Tools
import React from "react";
//Components
import Header from "./Header";
//Styles
import classes from "./JoinLayout.module.scss";

const JoinLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={classes.container}>{children}</div>
        </>
    );
};

export default JoinLayout;