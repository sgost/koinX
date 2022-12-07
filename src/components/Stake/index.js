import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import SEO from "../seo"
import { BlogsWrapper } from "./styles";
import { Layout } from "antd";
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

export const StakePost = ({
  fields,
  author_image,
  author,
  date,
  title,
  preview,
  bannerTitle1,
  blogBodyArray1,
  bannerTitle,
  bannerDesc,
  blogBodyArray,
  alsoReadTitle,
  alsoReadSlug,
  youtubeContainerTitle,
  youtubeArray,
  coinWorkTitle,
  coinWorkArray,
  coinPointTitle,
  coinPointArray,
  bitCoinTitle,
  bitcoinArray,
  collapseTitle,
  questionsArray,
  moreCoinsTitle,
  moreCoinsArray,
  currencyBlockTitle,
  currencyBlockArray,
  cryptoGuideTitle,
  cryptoGuideArray,
  sideNavArray
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
            {/* Body 1 */}
            <h2>{bannerTitle1}</h2>
            {blogBodyArray1?.map((item) => {
              return (
                <>
                  {item?.title && <h3>{item?.title} </h3>}
                  {item?.description && <p>{item?.description}</p>}
                </>
              )
            })}

            {/* Body 2  */}
            <h2 id={resolveFunction(bannerTitle)}>{bannerTitle}</h2>
            {/* Link map */}
            {blogBodyArray?.map((item, index) => {
              return (
                <p className="text_link">Step {index + 1}: <Link to={fields?.slug + "/#" + resolveFunction(item?.title)} className="head_link" activeclassName="active_head_link">{item?.title}</Link></p>
              )
            })}

            {/* body map */}
            {blogBodyArray?.map((item, index) => {
              return (
                <>
                  <h3 id={resolveFunction(item?.title)}>{item?.title} </h3>
                  <p>{item?.description}</p>
                </>
              )
            })}

            {/* About link */}
            <p className="text_link">Also Read: <Link to={fields?.slug + "/#" + alsoReadSlug}>{alsoReadTitle}</Link></p>
          </Content>
          {/* blogs video component */}
          <BlogVideo youtubeContainerTitle={youtubeContainerTitle} youtubeArray={youtubeArray} />
          <HoldCoins
            bitCoinTitle={bitCoinTitle}
            bitcoinArray={bitcoinArray}
          />
          {/* Body 1 */}
          <Content className="blog_body">
            <h2>{coinWorkTitle}</h2>
            {coinWorkArray?.map((item, index) => {
              return (
                <p className="text_link">Step {index + 1}: <Link to={fields?.slug + "/#" + resolveFunction(item?.title)} className="head_link" activeclassName="active_head_link">{item?.title}</Link></p>
              )
            })}
            {coinWorkArray?.map((item, index) => {
              return (
                <>
                  {item?.title && <h3 id={resolveFunction(item?.title)}>{item?.title} </h3>}
                  <div className="desc_wrap">
                    <img src={item?.icon?.publicURL ? item?.icon?.publicURL : item?.icon} className="desc_wrap_icon" alt={item?.description} />
                    {item?.description && <p>{item?.description}</p>}
                  </div>
                  <p className="bullets_label">Pros</p>
                  {item?.pointArray?.length > 0 && <> {item.pointArray.map((itm) => <p>&#8226; {itm}</p>)}</>}
                  <p className="bullets_label bullets_label_margin_top">Pros</p>
                  {item?.pointArray?.length > 0 && <> {item.pointArray2.map((itm) => <p>&#8226; {itm}</p>)}</>}
                  {index === 0 && <p className="text_link">Also Read: <Link to={fields?.slug + "/#" + alsoReadSlug}>{alsoReadTitle}</Link></p>}
                </>
              )
            })}
            <p className="text_link">Also Read: <Link to={fields?.slug + "/#" + alsoReadSlug}>{alsoReadTitle}</Link></p>
            <h2>{coinPointTitle}</h2>
            {coinPointArray?.length > 0 && <> {coinPointArray.map((itm) => <p>&#8226; {itm}</p>)}</>}
          </Content>
          {/* Blog releated coin types */}
          <BlogCoinTypes
            moreCoinsTitle={moreCoinsTitle}
            moreCoinsArray={moreCoinsArray}
          />
          <BlogCollapse
            collapseTitle={collapseTitle}
            questionsArray={questionsArray}
          />
        </Layout>
        <BlogLinks fields={fields} sideNavArray={sideNavArray} />
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

  const { Stakepost: post } = data;

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
      <StakePost
        fields={post.fields}
        author_image={author_image}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        tags={post.frontmatter.tags}
        preview={false}
        bannerTitle1={post.frontmatter.bannerTitle1}
        blogBodyArray1={post.frontmatter.blogBodyArray1}
        bannerTitle={post.frontmatter.bannerTitle}
        bannerDesc={post.frontmatter.bannerDesc}
        blogBodyArray={post.frontmatter.blogBodyArray}
        alsoReadTitle={post.frontmatter.alsoReadTitle}
        alsoReadSlug={post.frontmatter.alsoReadSlug}
        youtubeContainerTitle={post.frontmatter.youtubeContainerTitle}
        youtubeArray={post.frontmatter.youtubeArray}
        coinWorkTitle={post.frontmatter.coinWorkTitle}
        coinWorkArray={post.frontmatter.coinWorkArray}
        coinPointTitle={post.frontmatter.coinPointTitle}
        coinPointArray={post.frontmatter.coinPointArray}
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
        sideNavArray={post.frontmatter.sideNavArray}
      />
    </Fragment>
  )
}

export default Blog

export const query = graphql`
  query($slug: String!) {
    Stakepost: markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        readingTime {
          text
        }
      }
      frontmatter {
        author
        bannerTitle1
        blogBodyArray1 {
          title
          description
        }
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
        coinWorkTitle
        coinWorkArray {
          title
          description
          pointArray
          pointArray2
          icon {
            publicURL
          }
        }
        coinPointTitle
        coinPointArray
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
        sideNavArray {
          title
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