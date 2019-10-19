import React from "react"

import Project from "./Project"
import PortfolioSliderStyles from "./PortfolioSlider.module.css"

const PortfolioSlider = () => (
  <div className={PortfolioSliderStyles.container}>
    <span className={PortfolioSliderStyles.spacer}></span>
    <Project />
    <Project />
    <Project />
    <Project />
    <span className={PortfolioSliderStyles.spacer}></span>
  </div>
)

export default PortfolioSlider
