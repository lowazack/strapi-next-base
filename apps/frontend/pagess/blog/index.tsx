import { strapiGet } from "../../lib/strapi";
import Layout from "../../components/Layout";
import SiteHead from "../../components/SiteHead";
import ArticlesGrid from "../../components/ArticlesGrid";

export default function blog({siteSettings, articles}){
    


    const pageData = {
        pageName: "Blog",
        pageDescription: "All blogs from us foound here",
        pageTitle: "Blog"
    }

    return (
        <>
        <SiteHead siteSettings={siteSettings} pageData={pageData}/>
        <Layout>
            <ArticlesGrid articles={articles.data}/>
        </Layout>
        </>
      );
}

export async function getStaticProps(context) {
    const articles = await strapiGet('/api/blogs')
    const siteSettings = await strapiGet('/api/site-setting?populate=%2A');
    
    return {
      props: {
        siteSettings: siteSettings.data.attributes,
        articles
      }, 
    }
  }