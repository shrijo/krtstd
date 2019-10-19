import React from "react"
import ProjectStyles from "./ProjectStyles.module.css"

const Project = () => (
  <div className={ProjectStyles.container}>
    <h3 className={ProjectStyles.projectTitle}>Customer</h3>
    <h4 className={ProjectStyles.projectDescription}>Here is the place for a discription</h4>
    <div className={ProjectStyles.projectImage}></div>
  </div>
)


export default Project
