import React from 'react'

export default ({ data }) => (
  <div>
    <h3>title with gatsby-config ({data.site.siteMetadata.title})</h3>
    <h1>About me</h1>
    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
  </div>
)

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
