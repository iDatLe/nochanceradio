import React from "react"

import Header from "../header"
import SEO from "../seo"
import "./layout.scss"

const Layout = props => {
  return (
    <>
      <Header />
      <div>
        <main>{props.children}</main>
        <SEO seo={props.seo} />
      </div>
    </>
  )
}

export default Layout
