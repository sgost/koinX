import React, { Fragment } from "react";
import Subscribe from "../components/subscribe";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import BlogPage from "./blogs"

import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Fragment>
      <SEO title="Home" description="Gatsby is a React-based open source framework with performance, scalability and security built-in." keywords={['gatsby', 'react']} />
      <Navbar />
      <BlogPage />
      <Subscribe />
      <Footer />
    </Fragment>
  )
}

export default IndexPage
