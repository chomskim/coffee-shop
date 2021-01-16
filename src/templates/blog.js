import React from "react";
import { graphql, Link } from "gatsby";
import HeroImage from "gatsby-image";
import Layout from "../components/Layout";
import styles from "./blog.module.css";

export default function BlogTemplate({ data }) {
  // Generate the previous and next page URLs.
  const title = data.markdownRemark.frontmatter.title;
  const html = data.markdownRemark.html;
  const heroImage = data.markdownRemark.frontmatter.heroImage;

  return (
    <Layout>
      {heroImage && (
        <HeroImage className={styles.hero} fluid={heroImage.childImageSharp.fluid} />
      )}
      <div className={styles.blog}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        heroImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
