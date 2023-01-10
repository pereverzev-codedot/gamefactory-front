const allSHeader = `
  allStrapiSHeader {
    nodes {
      position
      component
      id
      logoUrl
      logoTitle
      logoImage {
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
      links {
        title
        url
        id
      }
      dropdownLinks {
        id
        title
        url
        subItems {
          url
          title
          id
        }
      }
    }
  }
`

module.exports = allSHeader
