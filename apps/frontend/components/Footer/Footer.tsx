import MadeBy from "../MadeBy";
import styles from "./Footer.module.scss";

import Logo from "../../svg/logo.svg"
import Facebook from "../../svg/facebook.svg"
import Instagram from "../../svg/instagram.svg"
import Twitter from "../../svg/twitter.svg"
import LinkedIn from "../../svg/linkedIn.svg"
import { strapiGet } from "../../lib/strapi";



export default async function Footer(){

    const socials = (await strapiGet("/api/social")).data.attributes

    return (
        <>
        <div className={styles.footer}>
            <footer className={styles.content}>
                <div className={styles.column}>
                    <Logo className={styles.logo}/>

                    <div className={styles.socials}>
                        {socials.facebook && (
                            <a href={socials.facebook} target="_blank" rel="noreferrer">
                                <Facebook />
                            </a>
                        )}
                        
                        {socials.instagram && (
                            <a href={socials.instagram} target="_blank" rel="noreferrer">
                                <Instagram />
                            </a>
                        )}

                        {socials.twitter && (
                            <a href={socials.twitter} target="_blank" rel="noreferrer">
                                <Twitter />
                            </a>
                        )}

                        {socials.instagram && (
                            <a href={socials.linkedIn} target="_blank" rel="noreferrer">
                                <LinkedIn />
                            </a>
                        )}
                    </div>
                
                </div>
            </footer>
        </div>
        <MadeBy />
        </>
    )
}