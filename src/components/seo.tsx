import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Seo = ({ title }: { title?: string | null }) => {
  const data = useStaticQuery(graphql`
    query Seo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
};

export default Seo;
