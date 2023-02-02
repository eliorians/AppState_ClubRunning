//Tools
import React from "react";
//Components
import Header from "./Header";
//Styles
import classes from "./ScheduleLayout.module.scss";

const ScheduleLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={classes.container}>{children}</div>
        </>
    );
};

export default ScheduleLayout;