import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Survey = () => {
  return (
    <Layout>
      <SEO title="Survey" />
      <div
        className="section"
        style={{
          height: "100vh",
        }}
      >
        <div className="container">
          <h1>Survey</h1>
          <p>Welcome to page 2</p>

          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
    </Layout>
  )
}
export default Survey
