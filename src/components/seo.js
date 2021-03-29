import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";

const defaultTitle = "Lagerbygg Vest AS";
const defaultDescription =
  "Vi presenterer Galteråsen og Olsvollstranda som tilsammen gir 23 næringsseksjoner i Alver. Bygningene er under planlegging og kan tilpasses leietaker / kjøpers behov.";

export default function Seo({ page, info }) {
  const router = useRouter();
  const url = router.asPath ?? router.pathname;
  const title = `${page?.openGraph?.title ?? page?.title ?? defaultTitle} | Lagerbygg Vest AS`;
  const description = page?.openGraph?.description ?? defaultDescription;
  const name = info?.name ?? "Lagerbygg Vest AS";
  const image = "";

  return (
    <Head>
      <title lang="no">{title ?? defaultTitle}</title>
      <meta name="description" content={description}></meta>
      <link rel="canonical" href={url}></link>
      <meta property="og:title" content={title}></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:url" content={url}></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:image" content={image}></meta>
      <meta property="og:locale" content="en_US"></meta>
      <meta property="og:site_name" content={name}></meta>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: name,
          legalName: name,
          url: "https://lagerbyggvest.no/",
          logo: "https://lagerbyggvest.no/images/logo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: info?.address1 ?? "Idrettsveien 3",
            addressRegion: info?.city ?? "Manger",
            postalCode: info?.zipCode ?? "5936",
            addressCountry: info?.country ?? "Norway"
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Sales and support",
            telephone: info?.phone ?? "+4790928237",
            email: info?.email ?? "post@lagerbyggvest.no"
          },
          sameAs: info?.socialMedias.map(socialMedia => socialMedia?.url) ?? [
            "https://www.facebook.com/Lagerbygg-Vest-108543304664898/",
            "https://www.instagram.com/lagerbyggvest/"
          ]
        })}
      </script>
    </Head>
  );
}
