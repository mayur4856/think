import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="head-cover">
    <div className="wrapper">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul className="nav-main">
          <li><Link to="/about-us/">About us</Link></li>
          <li><Link to="/blog/">Blog</Link></li>
          <li><Link to="/contact-us/">Contact us</Link></li>
      </ul>
    </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
