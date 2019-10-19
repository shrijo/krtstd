/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import PortfolioSlider from "./PortfolioSlider"
import "./layout.css"

const Layout = () => {

  return (
    <>
      <PortfolioSlider />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main></main>
      </div>
    </>
  )
}


export default Layout
