import React from "react"
import HeaderStyles from "./Header.module.css"




class Header extends React.Component {

  constructor(props) {
        super()
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
      alert("menu");
    }

  render() {
    return (
      <header className={HeaderStyles.navigation}>
        <h1 className={HeaderStyles.logo}>Karate</h1>
        <div className={HeaderStyles.buttonWrapper} onClick={this.handleClick}>
          <h2 className={HeaderStyles.buttonTextProjects}>Projects ↑</h2>
          <h2 className={HeaderStyles.buttonTextStudio}>Studio ↓</h2>
        </div>
      </header>
    )
  }
}



export default Header
