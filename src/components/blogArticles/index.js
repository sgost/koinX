import React from "react";
import { BlogArticlesStyle } from "./styles";
import { Layout } from "antd";
// import { graphql, Link, useStaticQuery } from "gatsby";

const BlogArticles = ({
  articlesTitle,
  articlesArray
}) => {
  const { Content } = Layout
  // const posts = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/mine/serial-port-devices/"}}, sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
  //       edges {
  //         node {
  //           id
  //           fields {
  //             slug
  //           }
  //           frontmatter {
  //             title
  //             navLinkTitle
  //             date
  //             author_image {
  //               childImageSharp {
  //                 fluid {
  //                   src
  //                 }
  //               }
  //               extension
  //               publicURL
  //             }
  //             excerpt
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // console.log("ssssssssssss", posts?.allMarkdownRemark?.edges)
  return (
    <BlogArticlesStyle>
      <Content className="blog_dashboad_wrapper">
        <h2>{articlesTitle}</h2>
        <div className="blog_main_wrap">
          {articlesArray?.map((item, index) => {
            return (
              <div className="blog_dash_wrapper" key={index}>
                <div className="thumb_img">
                  <img src={item?.icon?.publicURL ? item?.icon?.publicURL : item?.icon} alt="thumbnail" />
                  <div className="blog_title">
                    <h3>{item?.title}</h3>
                    <span>Added: {item?.date}</span>
                  </div>
                </div>
                <p className="blog_desc">{item?.description}</p>
              </div>
            )
          })}
        </div>
      </Content>
    </BlogArticlesStyle>
  )
}
export default BlogArticles;