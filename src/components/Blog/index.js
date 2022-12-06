import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
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
import Subscribe from "../subscribe";
// import BlogPost from "../Blog";
import Footer from "../Footer";
import Navbar from "../navbar";
import { ArrowRightOutlined } from '@ant-design/icons';

export const BlogPost = ({
  fields,
  author_image,
  author,
  bio,
  facebook,
  instagram,
  linkdin,
  twitter,
  youtube,
  date,
  title,
  html,
  preview,
  youtubeArray,
  buyCoinArray,
  bitCoinTitle,
  bitcoinArray,
  collapseTitle,
  questionsArray,
  moreCoinsTitle,
  moreCoinsArray,
  articlesTitle,
  articlesArray
}) => {
  const { Content } = Layout

  console.log("bitCoinTitle", bitCoinTitle)

  return (
    <Fragment>
      <Navbar />
      <BlogsWrapper>
        <Layout className="blog_data">
          <BlogHeader
            title={title}
            date={date}
            fields={fields}
            facebook={facebook}
            instagram={instagram}
            linkdin={linkdin}
            twitter={twitter}
            youtube={youtube}
          />
          <Content className="blog_body">
            {
              preview ? <div>{html}</div> : <div dangerouslySetInnerHTML={{ __html: html }} />
            }
          </Content>
          {/* blogs video component */}
          <BlogVideo youtubeArray={youtubeArray} />
          {/* blogs table component */}
          <BlogTable buyCoinArray={buyCoinArray} />
          <Content className="hold_coin">
            <h2>{bitCoinTitle}</h2>
            <div className="hold_coin_container_cards">
              {bitcoinArray?.map((item, index) => {
                return (
                  <div className="card" key={index}>
                    <img src={item?.image?.publicURL ? item?.image?.publicURL : item?.image} alt="item?.title" />
                    <div className="coin_text">
                      <span className="card_title">{item?.title}</span>
                      <button>Check Now<ArrowRightOutlined className="icon" /></button>
                    </div>
                  </div>
                )
              })}
            </div>
          </Content>
          <BlogCollapse
            collapseTitle={collapseTitle}
            questionsArray={questionsArray}
          />
          {/* Blog releated coin types */}
          <BlogCoinTypes
            moreCoinsTitle={moreCoinsTitle}
            moreCoinsArray={moreCoinsArray}
          />
        </Layout>
        <BlogLinks />
        {/* Blog releated articles */}
        <BlogArticles
          articlesTitle={articlesTitle}
          articlesArray={articlesArray}
        />
      </BlogsWrapper>
      <Subscribe />
      <Footer />
    </Fragment>
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
        facebook={post.frontmatter.facebook}
        instagram={post.frontmatter.instagram}
        linkdin={post.frontmatter.linkdin}
        twitter={post.frontmatter.twitter}
        youtube={post.frontmatter.youtube}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        html={post.html}
        tags={post.frontmatter.tags}
        preview={false}
        youtubeArray={post.frontmatter.youtubeArray}
        buyCoinArray={post.frontmatter.buyCoinArray}
        bitcoinArray={post.frontmatter.bitcoinArray}
        bitCoinTitle={post.frontmatter.bitCoinTitle}
        collapseTitle={post.frontmatter.collapseTitle}
        questionsArray={post.frontmatter.questionsArray}
        moreCoinsTitle={post.frontmatter.moreCoinsTitle}
        moreCoinsArray={post.frontmatter.moreCoinsArray}
        articlesTitle={post.frontmatter.articlesTitle}
        articlesArray={post.frontmatter.articlesArray}
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
        youtubeArray {
          id
          image {
            publicURL
          }
          title
        }
        buyCoinArray {
          id
          title
          image {
            publicURL
          }
          description
          Factsheet {
           title
           sheetValue
          }
        }
        bitCoinTitle
        bitcoinArray{
          title
          image {
            publicURL
          }
        }
        collapseTitle
        questionsArray {
          title
          description
        }
        moreCoinsTitle
        moreCoinsArray{
          title
          icon {
            publicURL
          }
        }
        articlesTitle
        articlesArray{
          title
          date(formatString: "MMMM DD, YYYY")
          description
          image {
            publicURL
          }
        }
        author_image {
          publicURL
        }
        bio
        facebook
        instagram
        linkdin
        twitter
        youtube
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