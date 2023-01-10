const allSPortfolio = `
  allStrapiSPortfolio {
    nodes {
      buttonText
      buttonUrl
      component
      sectionId
      sectionTitle
      position
      id
      games {
        title
        id
        slug
        coverImage {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          ext
        }
      }
    }
  }
`

module.exports = allSPortfolio
