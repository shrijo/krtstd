import React from "react"

import Project from "./Project"
import PortfolioSliderStyles from "./PortfolioSlider.module.css"

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


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
