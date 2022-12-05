import React from "react"
import { graphql, Link } from "gatsby"
import "../styles/blogs.css"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {

  const blogList = data.blogData.edges;

  const seoData = data.seoData.childMarkdownRemark.frontmatter;

  return (
    <div style={{ background: '#000' }}>
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
      <div className="blogListContainer">
        <h2>Blog</h2>
      </div>
    </div>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    blogData: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)\\/.*\\\\.md$/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            title
            excerpt
            author
            author_image {
              childImageSharp {
                fluid {
                  src
                }
              }
              extension
              publicURL
            }
            previewTitle
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    seoData: file(relativePath: {eq: "seoBlog.md"}) {
      childMarkdownRemark {
        frontmatter {
          title
          description
          keywords
        }
      }
    }
  }
`