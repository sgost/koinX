import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../seo"
import { BlogsWrapper } from "./styles";
import { Layout, Card } from "antd";
import bitcoin_banner from "../../data/assets/blogs/bitcoin_banner.png";
import hold_coin from "../../data/assets/blogs/hold_coin.png";
import hold_coin_tax from "../../data/assets/blogs/hold_coin_tax.png";
// import { Link } from "gatsby";
import BlogTable from "../blogTable";
import BlogVideo from "../blogVideo";
import BlogCollapse from "../blogCollapse";
import BlogArticles from "../blogArticles";
import BlogHeader from "../blogHeader";
import BlogCoinTypes from "../blogCoinTypes";
import BlogLinks from "../blogLinks";
import { ArrowRightOutlined } from '@ant-design/icons';

export const BlogPost = ({
  fields,
  author,
  bio,
  linkdin,
  twitter,
  date,
  title,
  html,
  preview
}) => {
  const { Content } = Layout

  return (
    <BlogsWrapper>
      <Layout className="blog_data">
        <BlogHeader title={title} />
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
          <div className="hold_coin_container_cards">
            <div className="card">
              <img src={hold_coin} alt="hold_coin" />
              <div className="coin_text">
                <span className="card_title">Calculate your Profits</span>
                <button>Check Now<ArrowRightOutlined className="icon" /></button>
              </div>
            </div>
            <div className="card">
              <img src={hold_coin_tax} alt="hold_coin_tax" />
              <div className="coin_text">
                <span className="card_title">Calculate your tax liability</span>
                <button>Check Now<ArrowRightOutlined className="icon" /></button>
              </div>
            </div>
          </div>
        </Content>
        <BlogCollapse />
        {/* Blog releated coin types */}
        <BlogCoinTypes />
      </Layout>
      <BlogLinks />
      {/* Blog releated articles */}
      <BlogArticles />
    </BlogsWrapper>
  )
}

const Blog = ({ data }) => {

  const { blogpost: post } = data;

  const seoData = post.frontmatter.seo;

  var author_image;
  if (post.frontmatter.author_image.publicURL) {
    author_image = post.frontmatter.author_image.publicURL;
  } else {
    author_image = post.frontmatter.author_image;
  }


  return (
    <Fragment>
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
      <BlogPost
        fields={post.fields}
        author_image={author_image}
        author={post.frontmatter.author}
        bio={post.frontmatter.bio}
        linkdin={post.frontmatter.linkdin}
        twitter={post.frontmatter.twitter}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        html={post.html}
        tags={post.frontmatter.tags}
        preview={false}
      />
    </Fragment>
  )
}

export default Blog

export const query = graphql`
  query($slug: String!) {
    blogpost: markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        readingTime {
          text
        }
      }
      frontmatter {
        author
        author_image {
          publicURL
        }
        bio
        linkdin
        twitter
        date(formatString: "MMMM DD, YYYY")
        title
        seo {
          title
          description
          keywords
        }
      }
      html
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