import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Banner = ({ children }) => (
  <div className="banner-cover">
    {children}
  </div>
)

export default Banner
