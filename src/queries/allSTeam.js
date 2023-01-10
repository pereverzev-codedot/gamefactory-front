const allSTeam = `
  allStrapiSTeam {
    nodes {
      id
      sectionTitle
      sectionId
      position
      component
      people {
        id
        name
        role
        text
        stats {
          id
          value
          key
        }
        socials {
          url
          icon
          id
        }
        photo {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

module.exports = allSTeam
