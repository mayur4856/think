import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Midcont from "../components/MidCon"
import Footer from "../components/Footer"

const Contactus = () => (
  <Layout>
    <SEO title="Page two" />
    <Banner>
      <h1>Contact Us</h1>
      <p>We Believe In</p>
    </Banner>
   	<Midcont />
   	<Footer />
  </Layout>
)



export default Contactus