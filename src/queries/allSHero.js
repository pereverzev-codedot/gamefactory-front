const allSHero = `
 allStrapiSHero {
    nodes {
      id
      sectionId
      sectionTitle
      position
      component
      images {
        tabTitle
        id
        images {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: NONE, quality: 50)
            }
          }
          alternativeText
        }
      }
    }
  }
`

module.exports = allSHero
