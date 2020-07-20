import React from "react"
import { Link, graphql } from "gatsby"

export default ({ data }) => (
  <>
    <h2>{data.site.siteMetadata.title}</h2>
    <div>{data.site.siteMetadata.description}</div>
    <Link to="/">Back to home</Link>
  </>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`
