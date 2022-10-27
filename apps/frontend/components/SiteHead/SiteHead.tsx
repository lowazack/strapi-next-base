import Head from "next/head"

// export default function SiteHead({
//     siteSettings: {siteName, siteDescription},
//     pageData: {pageName, pageDescription, pageTitle}
// }){
//     return (
//         <Head>
//             <title>{pageTitle || `${siteName} | ${pageName}`}</title>
//             <meta name="description" content={pageDescription || siteDescription}/>
//         </Head>
//     )
// }


export default function SiteHead({
    siteSettings: {siteName, siteDescription},
    pageData: {pageName, pageDescription, pageTitle}
}){
    return (
        <Head>
            <title>asdfasdfsadf</title>
            <meta name="description" content="asfasdfsdaf"/>
        </Head>
    )
}