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

export const PredictionPost = ({
  fields,
  author_image,
  author,
  date,
  title,
  preview,
  bannerTitle,
  headTableArray,
  bannerDesc,
  blogBodyArray,
  alsoReadTitle,
  alsoReadSlug,
  youtubeContainerTitle,
  youtubeArray,
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

            {/* Body 2  */}
            <h2 id={resolveFunction(bannerTitle)}>{bannerTitle}</h2>
            {/* table  */}
            <table className="table">
              {headTableArray.map((item, index) => {
                return (
                  <tr className="table_head" key={index}>
                    <td className="table_title">{item?.title}</td>
                    <td className={index === 4 && "table_padding"}>{item?.dataArr?.length > 0 ?
                      <td className="table_block">
                        <tr>
                          {item.dataArr.map((itm, index) =>
                            <td key={index}>{itm}</td>
                          )}
                        </tr>
                        <tr>
                          {item.dataArr2.map((itm, index) =>
                            <td key={index}>{itm}</td>
                          )}
                        </tr>
                      </td>
                      : item.value}
                    </td>
                  </tr>
                )
              })}
            </table>
            {/* About link */}
            <p className="text_link">Also Read: <Link to={fields?.slug + "/#" + alsoReadSlug}>{alsoReadTitle}</Link></p>

            {/* body map */}
            {blogBodyArray?.map((item) => {
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
          <Content className="blog_body" id={resolveFunction(coinPointTitle)}>
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
        <BlogLinks
          bannerTitle={bannerTitle}
          blogBodyArray={blogBodyArray}
          youtubeContainerTitle={youtubeContainerTitle}
          bitCoinTitle={bitCoinTitle}
          bulletpointTitle={coinPointTitle}
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

  const { Predictionpost: post } = data;

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
      <PredictionPost
        fields={post.fields}
        author_image={author_image}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        tags={post.frontmatter.tags}
        preview={false}
        bannerTitle={post.frontmatter.bannerTitle}
        headTableArray={post.frontmatter.headTableArray}
        bannerDesc={post.frontmatter.bannerDesc}
        blogBodyArray={post.frontmatter.blogBodyArray}
        alsoReadTitle={post.frontmatter.alsoReadTitle}
        alsoReadSlug={post.frontmatter.alsoReadSlug}
        youtubeContainerTitle={post.frontmatter.youtubeContainerTitle}
        youtubeArray={post.frontmatter.youtubeArray}
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
      />
    </Fragment>
  )
}

export default Blog

export const query = graphql`
  query($slug: String!) {
    Predictionpost: markdownRemark(fields: { slug: { eq: $slug } }) {
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
        headTableArray {
          title
          value
          dataArr
          dataArr2
        }
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