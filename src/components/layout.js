/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import PortfolioSlider from "./PortfolioSlider"
import Header from "./Header"
import Studio from "./Studio"

import "./layout.css"

const Layout = () => {

  return (
    <>
      <PortfolioSlider />
      <Header />
      <Studio />
    </>
  )
}


export default Layout
