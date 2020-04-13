import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const Home = () => {
  const seo = {
    title: "NO CHANCE",
    description: "Home page of No Chance Radio",
    page: "/",
  }
  return <Layout seo={seo}>{/* <div>hi</div> */}</Layout>
}

export default Home
