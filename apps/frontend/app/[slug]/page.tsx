import qs from "qs";
import { Suspense } from "react";
import BlockBuilder from "../../components/BlockBuilder";
import { strapiGet } from "../../lib/strapi";

async function getPage(slug:string) {
    const query = qs.stringify({
        filters: {
            slug: {
                $eq: slug
            }
        },
        populate: {
          blocks: {
            populate: '*',
          },
        },
      }, {
        encodeValuesOnly: true, // prettify URL
    });
    
    const page = (await strapiGet(`/api/pages?${query}`))
        .data[0];

        return {page};
}


export default async function Page({params: {slug}}){
    const {page} = await getPage(slug);
    
    return (
        <BlockBuilder blocks={page.attributes.blocks} />
    )
    
}