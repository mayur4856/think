import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Midcont from "../components/MidCon"
import Footer from "../components/Footer"

const Blog = () => (
	<div className="blog-cover">
	  <Layout>
	    <SEO title="Page two" />
	    <Banner>
	      <h1>Blog</h1>
	      <p>We Believe In</p>
	    </Banner>
	   	<Midcont />
	   	<Footer />
	  </Layout>
  	</div>
)

export default Blog
