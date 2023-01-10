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
  author_image_alt,
  author,
  date,
  title,
  preview,
  bannerTitle1,
  blogBodyArray1,
  bannerTitle,
  bannerDesc,
  blogBodyArray,
  NonbannerTitle,
  NonblogBodyArray,
  NonalsoReadTitle,
  NonalsoReadSlug,
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
            {/* Body 1 */}
            <h2 id={resolveFunction(bannerTitle1)}>{bannerTitle1}</h2>
            {blogBodyArray1?.map((item) => {
              return (
                <>
                  {item?.title && <h3 id={resolveFunction(item?.title)}>{item?.title} </h3>}
                  {item?.description && <p>{item?.description}</p>}
                </>
              )
            })}

            {/* custodial wallet */}
            <h2 id={resolveFunction(bannerTitle)}>{bannerTitle}</h2>
            {/* Link map */}
            {blogBodyArray?.map((item, index) => {
              return (
                <p className="text_link" key={item?.title}>Step {index + 1}: <Link to={fields?.slug + "/#" + resolveFunction(item?.title)} className="head_link" activeclassName="active_head_link">{item?.title}</Link></p>
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
            <p className="text_link">Also Read: <a href={alsoReadSlug} target="_blank" rel="noopener noreferrer">{alsoReadTitle}</a></p>

            {/* Non custodial wallet  */}
            {NonbannerTitle &&
              <>
                <h2 id={resolveFunction(NonbannerTitle)}>{NonbannerTitle}</h2>
                {/* Non custodial wallet Link map */}
                {NonblogBodyArray?.map((item, index) => {
                  return (
                    <p className="text_link" key={item?.title}>Step {index + 1}: <Link to={fields?.slug + "/#" + resolveFunction(item?.title)} className="head_link" activeclassName="active_head_link">{item?.title}</Link></p>
                  )
                })}

                {/* Non custodial wallet Link map */}
                {NonblogBodyArray?.map((item) => {
                  return (
                    <>
                      <h3 id={resolveFunction(item?.title)}>{item?.title} </h3>
                      <p>{item?.description}</p>
                    </>
                  )
                })}

                {/* Non custodial wallet Link map About link */}
                <p className="text_link">Also Read: <a href={NonalsoReadSlug} target="_blank" rel="noopener noreferrer">{NonalsoReadTitle}</a></p>
              </>
            }
          </Content>
          {/* blogs video component */}
          <BlogVideo youtubeContainerTitle={youtubeContainerTitle} youtubeArray={youtubeArray} />
          <HoldCoins
            bitCoinTitle={bitCoinTitle}
            bitcoinArray={bitcoinArray}
          />
          {/* Body 1 */}
          <Content className="blog_body">
            <h2 id={resolveFunction(coinWorkTitle)}>{coinWorkTitle}</h2>
            {coinWorkArray?.map((item, index) => {
              return (
                <p className="text_link" key={item?.title}>Step {index + 1}: <Link to={fields?.slug + "/#" + resolveFunction(item?.title)} className="head_link" activeclassName="active_head_link">{item?.title}</Link></p>
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
                  {item?.pointArray?.length > 0 && <> {item.pointArray.map((itm) => <p key={itm}>&#8226; {itm}</p>)}</>}
                  <p className="bullets_label bullets_label_margin_top">Cons</p>
                  {item?.pointArray?.length > 0 && <> {item.pointArray2.map((itm) => <p key={itm}>&#8226; {itm}</p>)}</>}
                  <p className="text_link">Also Read: <a href={item?.pridictionLink} target="_blank" rel="noopener noreferrer">{item?.pridictionTitle}</a></p>
                </>
              )
            })}
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
          bannerTitle={bannerTitle1}
          blogBodyArray={bannerTitle}
          youtubeContainerTitle={youtubeContainerTitle}
          bitCoinTitle={coinWorkTitle}
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

  const { Stakepost: post } = data;

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
      <StakePost
        fields={post.fields}
        author_image={author_image}
        author_image_alt={post.author_image_alt}
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
        NonbannerTitle={post.frontmatter.NonbannerTitle}
        NonblogBodyArray={post.frontmatter.NonblogBodyArray}
        NonalsoReadTitle={post.frontmatter.NonalsoReadTitle}
        NonalsoReadSlug={post.frontmatter.NonalsoReadSlug}
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
        NonbannerTitle
        NonblogBodyArray {
          title
          description
        }
        NonalsoReadTitle
        NonalsoReadSlug
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
          pridictionTitle
          pridictionLink
          icon {
            publicURL
          }
          alt
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