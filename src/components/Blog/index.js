import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import SEO from "../seo"
import { BlogsWrapper } from "./styles";
import { Layout } from "antd";
import BlogTable from "../blogTable";
import BlogVideo from "../blogVideo";
import BlogCollapse from "../blogCollapse";
import BlogArticles from "../blogArticles";
import BlogHeader from "../blogHeader";
import BlogCoinTypes from "../blogCoinTypes";
import BlogLinks from "../blogLinks";
import HoldCoins from "../holdCoins";
import Subscribe from "../subscribe";
import Footer from "../Footer";
import Navbar from "../navbar";
import { resolveFunction } from "../../utils/functions";

export const BlogPost = ({
  fields,
  author_image,
  author,
  date,
  title,
  preview,
  bannerTitle,
  bannerDesc,
  blogBodyArray,
  alsoReadTitle,
  alsoReadSlug,
  youtubeContainerTitle,
  youtubeArray,
  buyAlsoReadTitle,
  buyAlsoReadSlug,
  buyCoinTitle,
  buyCoinArray,
  bitCoinTitle,
  bitcoinArray,
  collapseTitle,
  questionsArray,
  moreCoinsTitle,
  moreCoinsArray,
  currencyBlockTitle,
  currencyBlockArray,
  cryptoGuideTitle,
  cryptoGuideArray
}) => {
  const { Content } = Layout

  return (
    <Fragment>
      <Navbar />
      <BlogsWrapper>
        <Layout className="blog_data">
          <BlogHeader
            title={title}
            date={date}
            fields={fields}
          />
          <Content className="blog_body">
            <img src={author_image} alt="img" />
            <p>{bannerDesc}</p>
            <h2 id={resolveFunction(bannerTitle)}>{bannerTitle}</h2>
            {/* Link map */}
            {blogBodyArray?.map((item, index) => {
              return (
                <p className="text_link">STEP {index + 1}: <Link to={fields?.slug + "/#" + resolveFunction(item?.title)} className="head_link" activeclassName="active_head_link">{item?.title}</Link></p>
              )
            })}

            {/* body map */}
            {blogBodyArray?.map((item, index) => {
              return (
                <>
                  <h3 id={resolveFunction(item?.title)}>Step {index + 1} : {item?.title} </h3>
                  <p>{item?.description}</p>
                </>
              )
            })}

            {/* About link */}
            <p className="text_link">Also Read: <a href={alsoReadSlug} target="_blank" rel="noopener noreferrer">{alsoReadTitle}</a></p>
          </Content>
          {/* blogs video component */}
          <BlogVideo youtubeContainerTitle={youtubeContainerTitle} youtubeArray={youtubeArray} />
          {/* blogs table component */}
          <BlogTable
            buyCoinTitle={buyCoinTitle}
            buyCoinArray={buyCoinArray}
            linkcompo={<a href={buyAlsoReadSlug} target="_blank" rel="noopener noreferrer">{buyAlsoReadTitle}</a>}
          />
          <HoldCoins
            bitCoinTitle={bitCoinTitle}
            bitcoinArray={bitcoinArray}
          />
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
        <BlogLinks
          bannerTitle={bannerTitle}
          blogBodyArray=""
          youtubeContainerTitle={youtubeContainerTitle}
          bitCoinTitle={buyCoinTitle}
          bulletpointTitle={bitCoinTitle}
          moreCoinsTitle={moreCoinsTitle}
          collapseTitle={collapseTitle}
          articlesTitle={currencyBlockTitle}
          cryptoGuideTitle={cryptoGuideTitle}
          fields={fields}
        />
        {/* Blog releated articles */}
        <BlogArticles
          articlesTitle={currencyBlockTitle}
          articlesArray={currencyBlockArray}
        />
        <div className="articles_guide">
          <BlogArticles
            articlesTitle={cryptoGuideTitle}
            articlesArray={cryptoGuideArray}
          />
        </div>
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
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        tags={post.frontmatter.tags}
        preview={false}
        bannerTitle={post.frontmatter.bannerTitle}
        bannerDesc={post.frontmatter.bannerDesc}
        blogBodyArray={post.frontmatter.blogBodyArray}
        alsoReadTitle={post.frontmatter.alsoReadTitle}
        alsoReadSlug={post.frontmatter.alsoReadSlug}
        buyAlsoReadTitle={post.frontmatter.buyAlsoReadTitle}
        buyAlsoReadSlug={post.frontmatter.buyAlsoReadSlug}
        youtubeContainerTitle={post.frontmatter.youtubeContainerTitle}
        youtubeArray={post.frontmatter.youtubeArray}
        buyCoinTitle={post.frontmatter.buyCoinTitle}
        buyCoinArray={post.frontmatter.buyCoinArray}
        bitcoinArray={post.frontmatter.bitcoinArray}
        bitCoinTitle={post.frontmatter.bitCoinTitle}
        collapseTitle={post.frontmatter.collapseTitle}
        questionsArray={post.frontmatter.questionsArray}
        moreCoinsTitle={post.frontmatter.moreCoinsTitle}
        moreCoinsArray={post.frontmatter.moreCoinsArray}
        currencyBlockTitle={post.frontmatter.currencyBlockTitle}
        currencyBlockArray={post.frontmatter.currencyBlockArray}
        cryptoGuideTitle={post.frontmatter.cryptoGuideTitle}
        cryptoGuideArray={post.frontmatter.cryptoGuideArray}
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
        bannerTitle
        bannerDesc
        blogBodyArray {
          title
          description
        }
        alsoReadTitle
        alsoReadSlug
        youtubeContainerTitle
        youtubeArray {
          link
          title
        }
        buyAlsoReadTitle
        buyAlsoReadSlug
        buyCoinTitle
        buyCoinArray {
          id
          title
          image {
            publicURL
          }
          description
          Factsheet {
            sheetValue
          }
        }
        bitCoinTitle
        bitcoinArray{
          title
          link
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
          link
          icon {
            publicURL
          }
        }
        currencyBlockTitle
        currencyBlockArray {
          title
          date
          description
          icon {
            publicURL
          }
        }
        cryptoGuideTitle
        cryptoGuideArray {
          title
          date
          description
          icon {
            publicURL
          }
        }
        author_image {
          publicURL
        }
        date(formatString: "MMMM DD, YYYY")
        title
        seo {
          title
          description
          keywords
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