import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Banner from "../components/banner"
import MidCon from "../components/MidCon"
import Footer from "../components/Footer"


const IndexPage = ({}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Banner>
      <h1>We are The Creatives</h1>
      <p>We Believe In</p>
    </Banner>
    <MidCon />
    <Footer />
  </Layout>
)

export default IndexPage
