/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"

const siteURL = "https://nochanceradio.com"

const SEO = props => {
  const { title, description, page } = props.seo
  const url = `${siteURL}${page}`

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>{title}</title>
      <link rel="canonical" href={url} />

      <meta name="description" content={description} />

      {/* OpenGraph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default SEO
