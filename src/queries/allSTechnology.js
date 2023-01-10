const allSTechnology = `
allStrapiSTechnology {
    nodes {
      id
      position
      component
      sectionId
      sectionTitle
      technologies {
        id
        title
        url
        image {
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
          ext
        }
      }
    }
  }
`

module.exports = allSTechnology
