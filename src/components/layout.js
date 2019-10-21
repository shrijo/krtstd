/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Div100vh from 'react-div-100vh'

import PortfolioSlider from "./PortfolioSlider"
import Header from "./Header"
import Studio from "./Studio"

import LayoutStyles from "./layout.module.css"

const Layout = () => (

  <Div100vh className={LayoutStyles.container}>
    <PortfolioSlider />
    <Header />
    <Studio />
  </Div100vh>
)

export default Layout
