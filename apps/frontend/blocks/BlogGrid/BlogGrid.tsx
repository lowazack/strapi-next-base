
import ArticleCard from "../../components/ArticleCard";
import { strapiGet } from "../../lib/strapi";
import styles from "./BlogGrid.module.scss";


async function getArticles() {
    const articles = await strapiGet('/api/blogs?populate[0]=featuredImage');
    return {
        articles: articles.data
    }
}

export default async function BlogGrid(){

    const {articles} = await getArticles();


    return (
        <div className={styles.grid}>
            {articles.map((article, index) => (
            <ArticleCard
                key={`article-${index}`}
                title={article.attributes.pageTitle}
                desc={article.attributes.pageDescription}
                slug={article.attributes.slug}
                image={article.attributes.featuredImage}
            />
                
            ))}
        </div>
    )
}