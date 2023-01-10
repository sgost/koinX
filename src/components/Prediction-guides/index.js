import React, { Fragment } from "react"
import { graphql } from "gatsby"
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
  author_image_alt,
  author,
  date,
  title,
  preview,
  bannerTitle,
  headTableArray,
  bannerDesc,
  blogBodyArray,
  buyAlsoReadTitle,
  buyAlsoReadSlug,
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
            <img src={author_image} alt={author_image_alt} />
            <p>{bannerDesc}</p>

            {/* Body 2  */}
            <h2 id={resolveFunction(bannerTitle)}>{bannerTitle}</h2>
            {/* table  */}
            <table className="table">
              <tr className="table_head">
                <td className="table_title">Cryptocurrency</td>
                <td>{headTableArray[0]?.Cryptocurrency}</td>
              </tr>
              <tr className="table_head">
                <td className="table_title">Launch Date</td>
                <td>{headTableArray[0]?.LaunchDate}</td>
              </tr>
              <tr className="table_head">
                <td className="table_title">Website</td>
                <td>{headTableArray[0]?.Website}</td>
              </tr>
              <tr className="table_head">
                <td className="table_title">Price Today</td>
                <td>{headTableArray[0]?.PriceToday}</td>
              </tr>
              <tr className="table_head">
                <td className="table_title">Price Change</td>
                <td className="table_padding">
                  <td className="table_block">
                    <tr>
                      {headTableArray[0]?.PriceChange?.map((itm) =>
                        <td key={itm}>{itm}</td>
                      )}
                    </tr>
                    <tr>
                      {headTableArray[0]?.PriceChange2?.map((itm) =>
                        <td key={itm}>{itm}</td>
                      )}
                    </tr>
                  </td>
                </td>
              </tr>
              <tr className="table_head">
                <td className="table_title">Bitcoin Market Cap</td>
                <td>{headTableArray[0]?.BitcoinMarket}</td>
              </tr>
              <tr className="table_head">
                <td className="table_title">Circulating Supply</td>
                <td>{headTableArray[0]?.CirculatingSupply}</td>
              </tr>
              <tr className="table_head">
                <td className="table_title">Trading Volume</td>
                <td>{headTableArray[0]?.TradingVolume}</td>
              </tr>
              <tr className="table_head">
                <td className="table_title">All Time High</td>
                <td>{headTableArray[0]?.AllTimeHigh}</td>
              </tr>
              <tr className="table_head">
                <td className="table_title">All Time Low</td>
                <td>{headTableArray[0]?.AllTimeLow}</td>
              </tr>
            </table>
            {/* About link */}
            <p className="text_link">Also Read: <a href={alsoReadSlug} target="_blank" rel="noopener noreferrer">{alsoReadTitle}</a></p>

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
            <p className="text_link">Also Read: <a href={buyAlsoReadSlug} target="_blank" rel="noopener noreferrer">{buyAlsoReadTitle}</a></p>
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
            {coinPointArray?.length > 0 && <> {coinPointArray.map((itm) => <p key={itm}>&#8226; {itm}</p>)}</>}
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
          blogBodyArray=""
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

  const handleImage = (imageUrl) => {
    const pathname = typeof window !== 'undefined' && window.location.href;
    return typeof pathname === 'string' && pathname?.includes('https://www.koinx.com/') ? `/r${imageUrl}` : imageUrl;
  }

  let author_image;
  if (post.frontmatter.author_image.publicURL) {
    author_image = handleImage(post.frontmatter.author_image.publicURL);
  } else {
    author_image = handleImage(post.frontmatter.author_image);
  }

  return (
    <Fragment>
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
      <PredictionPost
        fields={post.fields}
        author_image={author_image}
        author_image_alt={post.author_image_alt}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        tags={post.frontmatter.tags}
        preview={false}
        bannerTitle={post.frontmatter.bannerTitle}
        headTableArray={post.frontmatter.headTableArray}
        bannerDesc={post.frontmatter.bannerDesc}
        blogBodyArray={post.frontmatter.blogBodyArray}
        buyAlsoReadTitle={post.frontmatter.buyAlsoReadTitle}
        buyAlsoReadSlug={post.frontmatter.buyAlsoReadSlug}
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
          Cryptocurrency
          LaunchDate
          Website
          PriceToday
          PriceChange
          PriceChange2
          BitcoinMarket
          CirculatingSupply
          TradingVolume
          AllTimeHigh
          AllTimeLow
        }
        blogBodyArray {
          title
          description
        }
        buyAlsoReadTitle
        buyAlsoReadSlug
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
          alt
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
          alt
        }
        currencyBlockTitle
        currencyBlockArray {
          title
          date
          description
          link
          icon {
            publicURL
          }
          alt
        }
        cryptoGuideTitle
        cryptoGuideArray {
          title
          date
          description
          link
          icon {
            publicURL
          }
          alt
        }
        author_image {
          publicURL
        }
        author_image_alt
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