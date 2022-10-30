import StrapiImage from "../../components/StrapiImage/StrapiImage";
import styles from "./LogoGrid.module.scss"

export default function LogoGrid({data}) {
    const {title, text, logos} = data;

    return (
        <div className={styles.logoGrid}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{text}</p>

            <div className={styles.grid}>
                {logos.data.map((logo, index) => {
                    return (
                        <div
                            key={`logo-grid-logo-${index}`}
                            className={styles.logoCont}
                        >
                            <StrapiImage
                                alt={logo.attributes.caption}
                                src={logo.attributes.url}
                                className={styles.logo}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}