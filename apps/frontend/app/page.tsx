import BlockBuilder from "../components/BlockBuilder";
import { strapiGet } from "../lib/strapi";

async function getPage() {
    const siteSettings = await strapiGet('/api/site-setting?populate=%2A');
    const page = await strapiGet(`/api/pages/${siteSettings.data.attributes.homePage.data.id}?populate=%2A`);


    return {blocks: page.data.attributes.blocks}
}


export default async function Page(){
    const {blocks} = await getPage();
    return (
        <BlockBuilder blocks={blocks} />
    )
}