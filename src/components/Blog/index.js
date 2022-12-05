import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../seo"
import { BlogsWrapper } from "../../styles/pages/BlogsStyles";
import { Layout, Card } from "antd";
import bitcoin_banner from "../../data/assets/blogs/bitcoin_banner.png";
import hambuger from "../../data/assets/blogs/hambuger.svg";
import { Link } from "gatsby";
import BlogTable from "../blogTable";
import BlogVideo from "../blogVideo";
import BlogCollapse from "../blogCollapse";
import BlogArticles from "../blogArticles";
import BlogHeader from "../BlogHeader";
import BlogCoinTypes from "../BlogCoinTypes";
const { Meta } = Card;

const { Content } = Layout
const BlogPost = () => {

  return (
    <BlogsWrapper>
      <Layout className="blog_data">
        <BlogHeader />
        <Content className="blog_body">
          <img src={bitcoin_banner} alt="img" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. Cras pulvinar ut justo eu tempor lorem dolor colon
          </p>
          <h2>How to buy Bitcoin in 3 easy steps</h2>
          <h3>Step 1 : Lorem ipsum dolor sit amet, consectetur </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. Cras pulvinar ut justo eu tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. Cras pulvinar ut justo eu tempor. </p>
          <h3>Step 2 : Lorem ipsum dolor sit amet, consectetur  </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. Cras pulvinar ut justo eu tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. Cras pulvinar ut justo eu tempor. </p>
          <h3>Step 3 : Lorem ipsum dolor sit amet, consectetur </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. Cras pulvinar ut justo eu tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. Cras pulvinar ut justo eu tempor. </p>
          <a> Also Read:Bitcoin Price Prediction</a>
        </Content>
        {/* blogs video component */}
        <BlogVideo />
        {/* blogs table component */}
        <BlogTable />
        <Content className="hold_coin">
          <h2>Already Holding Bitcoin?</h2>
          <Link className="hold_coin_link">Calculate your profits</Link>
          <Link className="hold_coin_link">Calculate your tax liability</Link>
        </Content>
        <BlogCollapse />
        {/* Blog releated coin types */}
        <BlogCoinTypes />
      </Layout>
      <div className="side_menu">
        <h2 className="menu_title"><img src={hambuger} alt="img" className="ham_icon" />Contents</h2>
        <ul className="sub_link_main">
          <li>How to buy Bitcoin in 3 easy steps</li>
          <li>How to buy Bitcoin in 3 easy steps</li>
          <li>How to buy Bitcoin in 3 easy steps</li>
          <li>How to buy Bitcoin in 3 easy steps</li>
          <li>How to buy Bitcoin in 3 easy steps</li>
        </ul>
      </div>
      {/* Blog releated articles */}
      <BlogArticles />
    </BlogsWrapper>
  )
}
export default BlogPost;