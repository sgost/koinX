import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const BlogPage = ({ data }) => {

  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)\\/.*\\\\.md$/"}}, sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
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
                extension
                publicURL
              }
              excerpt
            }
          }
        }
      }
    }
  `);


  const blogData = posts?.allMarkdownRemark?.edges

  return (
    <div style={{ background: '#000' }}>
      <div className="blogListContainer">
        <h1 style={{ color: `red` }}>How To Buy ?</h1>
        {blogData?.map((item) =>
          <Link to={item.node.fields.slug} id="blog_card">
            <h2 style={{ color: `blue` }}>{item.node.frontmatter.navLinkTitle}</h2>
          </Link>)}
        {/* 
        <h1 style={{ color: `red`, marginTop: `10px` }}>How to mine ?</h1>
        <Link to={blogData[0].node.fields.slug} id="blog_card">
          <h2 style={{ color: `blue` }}>{blogData[0].node.frontmatter.navLinkTitle}</h2>
        </Link> */}
      </div>
    </div>
  )
}

export default BlogPage;