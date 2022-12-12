import React, { Fragment } from "react";
import Subscribe from "../components/subscribe";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import BlogPage from "./blogs"

import SEO from "../components/seo";

const IndexPage = ({ data }) => {

  console.log("datadatadatadata", data)
  return (
    <Fragment>
      <SEO title="Home" description="Gatsby is a React-based open source framework with performance, scalability and security built-in." keywords={['gatsby', 'react']} />
      <Navbar />
      <BlogPage data={data} />
      <Subscribe />
      <Footer />
    </Fragment>
  )
}

export default IndexPage


export const pageQuery = graphql`
  query {
    blogData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "./src/data/(blog)/.*\\\\.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            navLinkTitle
            date
            author_image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }


    mineData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "./src/data/(mine)/.*\\\\.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            navLinkTitle
            date
            author_image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }



    stakeData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "./src/data/(stake)/.*\\\\.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            navLinkTitle
            date
            author_image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
    predictionData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "./src/data/(prediction)/.*\\\\.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            navLinkTitle
            date
            author_image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }

`

