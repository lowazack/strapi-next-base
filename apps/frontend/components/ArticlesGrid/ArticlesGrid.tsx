import ArticleCard from "../ArticleCard";
import styles from "./ArticlesGrid.module.scss";

export default function ArticlesGrid({articles}){
    console.log(articles)
    return (
        <div className={styles.grid}>
            {articles.map((article, index) => (
            <ArticleCard
                key={`article-${index}`}/>
            ))}
        </div>
    )
}