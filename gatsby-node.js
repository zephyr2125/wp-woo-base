const path = require(`path`)
// const chunk = require(`lodash/chunk`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const queryResults = await graphql(`
    {
        allWpProduct {
          nodes {
            slug
            id
          }
        }
      }
    `)
    const productTemplate = path.resolve(`src/templates/product.js`)
    queryResults.data.allWpProduct.nodes.forEach(node => {
      createPage({
        path: `/product/${node.slug}`,
        component: productTemplate,
        context: {
          product: node.id,
        },
      })
    })
  }