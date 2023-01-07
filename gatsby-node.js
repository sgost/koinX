exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-import',
    options: {
      libraryName: 'antd',
      style: true
    }
  })
}

const path = require('path');

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}


exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/works/)) {
    page.matchPath = "/works/*"
    createPage(page)
  }
}

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions

  const buys = graphql(`
    query {
			allMarkdownRemark(
				filter: { fileAbsolutePath: { regex: "./src/data/(buying-guides)\\/.*\\\\.md$/" } }
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    // Create blog pages
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/components/Buying-guides/index.js`),
        context: {
          slug: node.fields.slug
        },
      });
    });
  });


  // How to mine Bitcoin?
  const mine = graphql(`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "./src/data/(mining-guides)\\/.*\\\\.md$/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    // Create blog pages
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/components/Mining-guides/index.js`),
        context: {
          slug: node.fields.slug
        },
      });
    });
  });


  // How to stake Bitcoin ?
  const stake = graphql(`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "./src/data/(staking-guides)\\/.*\\\\.md$/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    // Create blog pages
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/components/Staking-guides/index.js`),
        context: {
          slug: node.fields.slug
        },
      });
    });
  });


  // Bitcoin price prediction !
  const prediction = graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "./src/data/(prediction-guides)\\/.*\\\\.md$/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    // Create blog pages
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/components/Prediction-guides/index.js`),
        context: {
          slug: node.fields.slug
        },
      });
    });
  });

  return Promise.all([buys, mine, stake, prediction]);

}
