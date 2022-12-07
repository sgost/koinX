import React, { useEffect } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { navigate } from "gatsby";
// import "../styles/blogs.css"
import SEO from "../components/seo";

const BlogPage = ({ data }) => {

  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(mine)\\/.*\\\\.md$/"}}, sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
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


  // useEffect(() => {
  //   navigate(blogData[0].node.fields.slug);
  // }, []);

  return (
    <div style={{ background: '#000' }}>
      <div className="blogListContainer">
        <h1 style={{ color: `blue` }}>Blogs List</h1>
        {blogData?.map((item) => {
          return (
            <Link to={item.node.fields.slug} id="blog_card">
              <h2 style={{ color: `red` }}>{item.node.frontmatter.navLinkTitle}</h2>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default BlogPage;