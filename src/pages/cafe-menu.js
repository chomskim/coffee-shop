import React from "react";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";

import styles from "./menu.module.css";
import CafeMenu from "../components/CafeMenu";
import MenuCategory from "../components/MenuCategory";

export default function CafeMenuPage({ data }) {
  return (
    <Layout>
      <CafeMenu data={data} />
    </Layout>
  );
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { contentKey: { eq: "menu" } }) {
      frontmatter {
        title
        categories {
          name
          items {
            name
            description
            price
          }
        }
      }
    }
  }
`;
