const blockSections = require('./blockSections')
const blockSeo = require('./blockSeo')

const allPages = `
 allStrapiPage {
    nodes {
      sections{
        ... on STRAPI__COMPONENT_SECTIONS_NOT_FOUND {
          section {
            id
          }
        }
        ${blockSections}
      }
      name
      locale
      url
    ${blockSeo}
    }
  }
`

module.exports = allPages
