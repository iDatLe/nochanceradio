import React from "react"
import Layout from "../../components/layout"

const Featured = () => {
  const seo = {
    title: "Featured",
    description: "Here are the featured guests",
    page: "/featured",
  }
  return (
    <Layout seo={seo}>
      <div>hi</div>
    </Layout>
  )
}

export default Featured
