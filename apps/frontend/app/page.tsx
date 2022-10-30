import qs from "qs";
import BlockBuilder from "../components/BlockBuilder";
import { strapiGet } from "../lib/strapi";

async function getPage() {
    const query = qs.stringify({
        populate: {
          blocks: {
            populate: '*',
          },
        },
      }, {
        encodeValuesOnly: true, // prettify URL
    });

    const siteSettings = await strapiGet('/api/site-setting?populate=%2A');
    const page = await strapiGet(`/api/pages/${siteSettings.data.attributes.homePage.data.id}?${query}`);

    return {blocks: page.data.attributes.blocks}
}


export default async function Page(){
    const {blocks} = await getPage();
    return (
        <BlockBuilder blocks={blocks} />
    )
}