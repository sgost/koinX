import React, { Fragment } from "react";
import Subscribe from "../components/subscribe";
import BlogPost from "../components/Blog";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Fragment>
      <SEO title="Home" description="Gatsby is a React-based open source framework with performance, scalability and security built-in." keywords={['gatsby', 'react']} />
      <Navbar />
      <BlogPost />
      <Subscribe />
      <Footer />
    </Fragment>
  )
}

export default IndexPage
