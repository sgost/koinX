import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import SEO from "../seo"
import { BlogsWrapper } from "./styles";
import { Layout } from "antd";
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
  preview,
  banner_image,
  bannerTitle,
  bannerDesc,
  blogBodyArray,
  alsoReadTitle,
  alsoReadSlug,
  youtubeContainerTitle,
  youtubeArray,
  buyCoinTitle,
  buyCoinArray,
  bitCoinTitle,
  bitcoinArray,
  collapseTitle,
  questionsArray,
  moreCoinsTitle,
  moreCoinsArray,
  articlesTitle,
  articlesArray,
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
            facebook={facebook}
            instagram={instagram}
            linkdin={linkdin}
            twitter={twitter}
            youtube={youtube}
          />
          <Content className="blog_body">
            <img src={author_image} alt="img" />
            <p>{bannerDesc}</p>
            <h2 id={bannerTitle?.toLowerCase().replace(/^\s+|\s+$/g, '_').replace(/ /g, "_")}>{bannerTitle}</h2>
            {/* Link map */}
            {blogBodyArray?.map((item, index) => {
              return (
                <p className="text_link">STEP {index + 1}: <Link to={fields?.slug + "/" + `#${item?.title?.toLowerCase().replace(/^\s+|\s+$/g, '_').replace(/ /g, "_")}`} className="head_link" activeclassName="active_head_link">{item?.title}</Link></p>
              )
            })}

            {/* body map */}
            {blogBodyArray?.map((item, index) => {
              return (
                <>
                  <h3 id={item?.title?.toLowerCase().replace(/^\s+|\s+$/g, '_').replace(/ /g, "_")}>Step {index + 1} : {item?.title} </h3>
                  <p>{item?.description}</p>
                </>
              )
            })}

            {/* About link */}
            <p className="text_link">Also Read: <Link to={fields?.slug + "/" + `#${alsoReadSlug}`}>{alsoReadTitle}</Link></p>
          </Content>
          {/* blogs video component */}
          <BlogVideo youtubeContainerTitle={youtubeContainerTitle} youtubeArray={youtubeArray} />
          {/* blogs table component */}
          <BlogTable buyCoinTitle={buyCoinTitle} buyCoinArray={buyCoinArray} />
          <Content className="hold_coin" id={bitCoinTitle?.toLowerCase().replace(/^\s+|\s+$/g, '_').replace(/ /g, "_")}>
            <h2>{bitCoinTitle}</h2>
            <div className="hold_coin_container_cards">
              {bitcoinArray?.map((item, index) => {
                return (
                  <div className="card" key={index}>
                    <img src={item?.image?.publicURL ? item?.image?.publicURL : item?.image} alt="item?.title" />
                    <div className="coin_text">
                      <span className="card_title">{item?.title}</span>
                      <Link to={item?.link}><button>Check Now<ArrowRightOutlined className="icon" /></button></Link>
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
        <BlogLinks fields={fields} sideNavArray={sideNavArray} />
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


  var banner_image;
  if (post.frontmatter.banner_image.publicURL) {
    banner_image = post.frontmatter.banner_image.publicURL;
  } else {
    banner_image = post.frontmatter.banner_image;
  }

  return (
    <Fragment>
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
      <BlogPost
        fields={post.fields}
        author_image={author_image}
        author={post.frontmatter.author}
        facebook={post.frontmatter.facebook}
        instagram={post.frontmatter.instagram}
        linkdin={post.frontmatter.linkdin}
        twitter={post.frontmatter.twitter}
        youtube={post.frontmatter.youtube}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        tags={post.frontmatter.tags}
        preview={false}
        banner_image={banner_image}
        bannerTitle={post.frontmatter.bannerTitle}
        bannerDesc={post.frontmatter.bannerDesc}
        blogBodyArray={post.frontmatter.blogBodyArray}
        alsoReadTitle={post.frontmatter.alsoReadTitle}
        alsoReadSlug={post.frontmatter.alsoReadSlug}
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
        articlesTitle={post.frontmatter.articlesTitle}
        articlesArray={post.frontmatter.articlesArray}
        sideNavArray={post.frontmatter.sideNavArray}
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
        banner_image {
          publicURL
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
          id
          image {
            publicURL
          }
          link
          title
        }
        buyCoinTitle
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
        articlesTitle
        articlesArray{
          title
          date(formatString: "MMMM DD, YYYY")
          description
          image {
            publicURL
          }
        }
        sideNavArray {
          title
        }
        author_image {
          publicURL
        }
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