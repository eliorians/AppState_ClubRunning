//Tools
import React from "react";
//Components
import Header from "./Header";
//Styles
import classes from "./RecordsLayout.module.scss";

const RecordsLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={classes.container}>{children}</div>
        </>
    );
};

export default RecordsLayout;