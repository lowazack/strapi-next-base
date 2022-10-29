import Link from "next/link"
import styles from "./Header.module.scss"

export default function DesktopLinks({links}){
    return (
        <ul className={styles.desktopNav}>
            {links.map((link, index) => (
                <li key={`header-desktop-${index}`}>
                    <Link href={link.destination}>{link.text}</Link>
                </li>
            ))}
        </ul>
    )
}