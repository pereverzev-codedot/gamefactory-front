const allSGallery = `
allStrapiSGallery {
    nodes {
      sectionId
      buttonText
      buttonUrl
      component
      position
      title
      id
      galleries {
        tabTitle
        id
        images {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          alternativeText
        }
      }
    }
  }
`

module.exports = allSGallery
