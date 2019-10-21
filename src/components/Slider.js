import React from "react"

import Swiper from 'react-id-swiper';
import SliderStyles from "./Slider.module.css"


const Slider = () => {
  const params = {
    slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
  }

  return(
    <Swiper {...params}>
      <div className={SliderStyles.slide}>Slide 1</div>
      <div className={SliderStyles.slide}>Slide 2</div>
      <div className={SliderStyles.slide}>Slide 3</div>
      <div className={SliderStyles.slide}>Slide 4</div>
      <div className={SliderStyles.slide}>Slide 5</div>
    </Swiper>
  )
}

export default Slider;
