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

  const blogs = graphql(`
    query {
			allMarkdownRemark(
				filter: { fileAbsolutePath: { regex: "./src/data/(blog)\\/.*\\\\.md$/" } }
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
        component: path.resolve(`./src/components/Blog/index.js`),
        context: {
          slug: node.fields.slug
        },
      });
    });
  });


  const mine = graphql(`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "./src/data/(mine)\\/.*\\\\.md$/" } }
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
        component: path.resolve(`./src/components/Mine/index.js`),
        context: {
          slug: node.fields.slug
        },
      });
    });
  });

  return Promise.all([blogs, mine]);

}
