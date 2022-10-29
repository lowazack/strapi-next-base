import styles from "./Header.module.scss"
import Logo from "../../svg/logo.svg"
import Link from "next/link"
import { strapiGet } from "../../lib/strapi"
import DesktopLinks from "./DesktopLinks";

export default async function Header(){
    
    const headerLinks = (await strapiGet('/api/header-menu?populate=%2A'))
        .data
        .attributes
        .menuLink;

    return (
        <header className={styles.header}>
            <Link href={"/"}>
                <Logo />
            </Link>
            <DesktopLinks links={headerLinks} />
        </header>
    )
}