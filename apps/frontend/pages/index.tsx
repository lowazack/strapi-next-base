import { strapiGet } from "../lib/strapi";
import Layout from "../components/Layout";
import SiteHead from "../components/SiteHead";
import BlockBuilder from "../components/BlockBuilder";

export default function Web({siteSettings, page}) {
  return (
    <>
    <SiteHead
    siteSettings={siteSettings}
    pageData={siteSettings.homePage.data.attributes}
    />
    <Layout>
      <BlockBuilder blocks={page.attributes.blocks}/>
    </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  let siteSettings = await strapiGet('/api/site-setting?populate=%2A');
  let page = await strapiGet(`/api/pages/${siteSettings.data.attributes.homePage.data.id}?populate=%2A`);

  return {
    props: {
      siteSettings: siteSettings.data.attributes,
      page: page.data
    }, 
  }
}