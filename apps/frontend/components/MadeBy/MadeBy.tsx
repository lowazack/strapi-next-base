import styles from "./MadeBy.module.scss";

import Heart from "../../svg/heart.svg"

export default function MadeBy(){
    return (
        <div className={styles.madeBy}>
            <p className={styles.text}>
                Made with <Heart className={styles.heart}/> by <a href="https://www.google.com">Company Name</a>
            </p>
        </div>
    )
}