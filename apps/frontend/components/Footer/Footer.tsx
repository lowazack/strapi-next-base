import MadeBy from "../MadeBy";
import styles from "./Footer.module.scss";

import Logo from "../../svg/logo.svg"
import Facebook from "../../svg/facebook.svg"
import Instagram from "../../svg/instagram.svg"
import Twitter from "../../svg/twitter.svg"
import LinkedIn from "../../svg/linkedIn.svg"

export default function Footer(){
    return (
        <>
        <div className={styles.footer}>
            <footer className={styles.content}>
                <div className={styles.column}>
                    <Logo className={styles.logo}/>

                    <div className={styles.socials}>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <Facebook />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <Instagram />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                            <Twitter />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                            <LinkedIn />
                        </a>
                    </div>
                
                </div>
            </footer>
        </div>
        <MadeBy />
        </>
    )
}