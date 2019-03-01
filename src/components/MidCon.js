import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Mayur from "../images/mayur.png"

const MidCon = () => (
    <div className="midcover"> 
      	<div className="wrapper">
            <div className="row case-list">
                <div className="col-md-4">
                    <div className="listing effect">
                        <img src={Mayur} atl="mayur" />
                        <h3>Only weak thinkers do not love the sky</h3> 
                        <p>Your positive action combine with positive thinking results in success.</p>
                        <h4>Mayur Baroliya</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="listing effect">
                        <img src={Mayur} atl="mayur" />
                        <h3>Only weak thinkers do not love the sky</h3> 
                        <p>Your positive action combine with positive thinking results in success.</p>
                        <h4>Mayur Baroliya</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="listing effect">
                        <img src={Mayur} atl="mayur" />
                        <h3>Only weak thinkers do not love the sky</h3> 
                        <p>Your positive action combine with positive thinking results in success.</p>
                        <h4>Mayur Baroliya</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="break">
            <div className="wrapper">
                <span>I'm trying to become a young Developer, to brand myself in technology.</span>
            </div>
        </div>
    </div>
)

export default MidCon
