import React from "react"
import HeaderStyles from "./Header.module.css"

const Header = () => (
  <header className={HeaderStyles.navigation}>
    <h1 className={HeaderStyles.logo}>Karate</h1>
    <div className={HeaderStyles.buttonWrapper}>
      <h2 className={HeaderStyles.buttonTextProjects}>Projects ↑</h2>
      <h2 className={HeaderStyles.buttonTextStudio}>Studio ↓</h2>
    </div>
  </header>
)


export default Header
