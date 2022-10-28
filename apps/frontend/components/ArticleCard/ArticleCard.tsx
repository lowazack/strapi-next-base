import Link from "next/link";
import StrapiImage from "../StrapiImage/StrapiImage";
import styles from "./ArticleCard.module.scss"

export default function ArticleCard({title, desc, slug, image}){
    const imagePlaceholder = "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80";

    console.log(image)
    
    return (
        <article className={styles.container}>
            <Link href={`/blog/${slug}`} className={styles.article}>
                <StrapiImage
                    alt={imagePlaceholder}
                    src={image.data.attributes.url}
                    className={styles.img}
                />
                <div className={styles.content}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={ styles.desc}>
                        {desc}
                    </p>
                </div>
            </Link>
        </article>
        
    )
}