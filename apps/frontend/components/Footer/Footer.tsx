import MadeBy from "../MadeBy";
import styles from "./Footer.module.scss";

export default function Footer(){
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <h1>Footer</h1>
            </div>
            <MadeBy />
        </div>
    )
}