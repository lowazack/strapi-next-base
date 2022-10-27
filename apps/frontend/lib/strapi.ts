import axios from "axios";

const strapiGet = async function(uri){
    const res = await fetch(`${process.env.STRAPI_URL}${uri}`);
    return res.json();
}
export {strapiGet}