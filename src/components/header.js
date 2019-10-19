import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header
    style={{
      background: `white`,
      height: `50px`,
      borderBottom: '1px solid #dedede',
      overflow: 'hidden',
    }}
  >
      <h1
        style={{
          color: 'black',
          fontSize: '16px',
          lineHeight: '50px',
        }}
      >
      Karate
      </h1>
  </header>
)


export default Header
