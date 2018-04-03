import React from 'react'

export default props => <button {...props} />

export const query = graphql`
  query PageButton {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
