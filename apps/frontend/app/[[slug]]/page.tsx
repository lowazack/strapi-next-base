import qs from "qs";
import BlockBuilder from "../../components/BlockBuilder";
import { strapiGet } from "../../lib/strapi";

async function getPage(slug) {
  console.log(slug);
  const query = qs.stringify({
      populate: ['deep', 5],
    }, {
      encodeValuesOnly: true, // prettify URL
  });

  const siteSettings = await strapiGet('/api/site-setting?populate=%2A');
  const page = await strapiGet(`/api/pages/${siteSettings.data.attributes.homePage.data.id}?${query}`);

  return page.data.attributes.blocks
}


export default async function Page(props){

  const {params: {slug}} = props;

    const {page} = await getPage(slug);
    
    return (
        <BlockBuilder blocks={page.attributes.blocks} />
    )
    
}