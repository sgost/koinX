import React from "react";
import { Link } from "gatsby";

const BlogPage = ({ data }) => {

  const blogData = data?.blogData?.edges


  const blogData2 = data?.mineData?.edges


  const blogData3 = data?.stakeData?.edges


  const blogData4 = data?.predictionData?.edges

  return (
    <div style={{ background: '#000', padding: `20px` }}>
      <div className="blogListContainer">
        <h1 style={{ color: `red`, marginTop: `50px` }}>How To Buy ?</h1>
        {blogData?.map((item) =>
          <Link to={item.node.fields.slug} id="blog_card">
            <h2 style={{ color: `blue`, border: `1px solid blue`, marginTop: `10px` }}>{item.node.frontmatter.title}</h2>
          </Link>)}
      </div>

      <div className="blogListContainer">
        <h1 style={{ color: `red`, marginTop: `50px` }}>How To mine ?</h1>
        {blogData2?.map((item) =>
          <Link to={item.node.fields.slug} id="blog_card">
            <h2 style={{ color: `blue`, border: `1px solid blue`, marginTop: `10px` }}>{item.node.frontmatter.title}</h2>
          </Link>)}
      </div>

      <div className="blogListContainer">
        <h1 style={{ color: `red`, marginTop: `50px` }}>How To stake ?</h1>
        {blogData3?.map((item) =>
          <Link to={item.node.fields.slug} id="blog_card">
            <h2 style={{ color: `blue`, border: `1px solid blue`, marginTop: `10px` }}>{item.node.frontmatter.title}</h2>
          </Link>)}
      </div>

      <div className="blogListContainer">
        <h1 style={{ color: `red`, marginTop: `50px` }}>Price prediction ?</h1>
        {blogData4?.map((item) =>
          <Link to={item.node.fields.slug} id="blog_card">
            <h2 style={{ color: `blue`, border: `1px solid blue`, marginTop: `10px` }}>{item.node.frontmatter.title}</h2>
          </Link>)}
      </div>
    </div>
  )
}

export default BlogPage;