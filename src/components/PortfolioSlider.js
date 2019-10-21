import React from "react"

import Project from "./Project"
import PortfolioSliderStyles from "./PortfolioSlider.module.css"
import Div100vh from "../../node_modules/react-div-100vh/lib/Div100vh"

const PortfolioSlider = () => (
  <Div100vh className={PortfolioSliderStyles.container}>
    <span className={PortfolioSliderStyles.spacer}></span>
    <Project />
    <Project />
    <Project />
    <Project />
    <span className={PortfolioSliderStyles.spacer}></span>
  </Div100vh>
)

export default PortfolioSlider
