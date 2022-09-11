import { useEffect } from "react";
import { Button } from "ui";
import { strapiGet } from "../lib/strapi";
import Layout from "../components/Layout";
import SiteHead from "../components/SiteHead";

export default function Web({siteSettings}) {  
  return (
    <>
    <SiteHead
    siteSettings={siteSettings}
    pageData={siteSettings.homePage.data.attributes}
    />
    <Layout>
      <h1>Content</h1>
    </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  let siteSettings = await strapiGet('/api/site-setting?populate=%2A');

  return {
    props: {
      siteSettings: siteSettings.data.attributes
    }, 
  }
}