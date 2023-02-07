import React from "react";


import classes from "./Footer.module.scss";
const footerColumns = [
    {
        id: 1,
        headline: "About us",
        links: ["Pricing", "Our Story", "Testimonials", "Investors", "Terms of Service"],
    },
    {
        id: 2,
        headline: "Contact us",
        links: ["Contact", "Support", "Destinations", "Careers", "Refund Policy"],
    },
];


const Footer = () => {
    return (
        <div className={classes.container}>
            <footer className={classes.footer}>
                <div className={classes.footer__newsletter}>
                    <h4 className={classes.footer__newsletter__headline}>
                        Join the Tropic newsletter to receive groundbreaking travel rewards
                    </h4>
                    <span>Unsubscribe at any time.</span>
                    <div className={classes.footer__newsletter__form}>
                        <input className={classes.input} type="email" placeholder="Your Email" />
                    </div>
                </div>
                <div className={classes.footer__content}>
                    {footerColumns.map(({ id, headline, links }) => (
                        <div className={classes.footer__content__col} key={id}>
                            <div className={classes.footer__content__col__headline}>{headline}</div>
                            <ul className={classes.footer__content__col__links}>
                                {links.map((link, index) => (
                                    <li key={index + 1}>
                                        <a href="/">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </footer>
        </div>
    );
};

export default Footer;