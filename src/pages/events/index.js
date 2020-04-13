import React from "react"
import Layout from "../../components/layout"

const Events = () => {
  const seo = {
    title: "Events",
    description: "Here are the featured guests",
    page: "/events",
  }
  return (
    <Layout seo={seo}>
      <div>EVENTS</div>
    </Layout>
  )
}

export default Events
