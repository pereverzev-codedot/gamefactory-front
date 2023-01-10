const allSService = `
allStrapiSService {
    nodes {
      id
      component
      position
      sectionId
      sectionTitle
      services {
        id
        text
        title
        image {
          ext
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
            childSvgSprites {
              internal {
                content
              }
            }
          }
        }
      }
    }
  }
`

module.exports = allSService
