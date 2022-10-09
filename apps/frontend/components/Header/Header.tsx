import styles from "./Header.module.scss"
import Logo from "../../svg/logo.svg"

export default function Header(){
    return (
        <header className={styles.header}>
            <Logo />
        </header>
    )
}