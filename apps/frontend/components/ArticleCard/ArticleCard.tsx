import styles from "./ArticleCard.module.scss"

export default function ArticleCard(){
    const imagePlaceholder = "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80";
    
    return (
        <article className={styles.container}>
            <a href="" className={styles.article}>
                <img alt="" src={imagePlaceholder} className={styles.img}/>
                <div className={styles.content}>
                    <h1 className={styles.title}>Article name</h1>
                    <p className={ styles.desc}>
                        lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis
                    </p>
                </div>
            </a>
        </article>
        
    )
}