import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={classes.container}>
            <footer className={classes.footer}>

                <div className={classes.footer__content}>
                    <div className={classes.footer__content__devs}>  
                        Developed By Eli Orians & Joseph Maradiaga
                    </div>

                    <div className={classes.footer__content__date}>  
                        Last Updated Spring 2022
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;