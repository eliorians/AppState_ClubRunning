import React from "react";
import classes from "./Footer.module.scss";



const Footer = () => {
    return (
        <div className={classes.container}>
            <footer className={classes.footer}>

                <div className={classes.footer__devs}>
                    Devloped by: Eli Orians & Joseph Maradiaga
                </div>

                <div className={classes.footer__date}>
                    Last Updated Spring 2022
                </div>

            </footer>
        </div>
    );
};

export default Footer;