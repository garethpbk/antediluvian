const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/post-template.js`);

    resolve(
      graphql(
        `
          query GET_ADL_POSTS_QUERY {
            allWordpressPost(filter: { categories: { eq: 4 } }) {
              edges {
                node {
                  content
                  date(formatString: "MMMM Do, YYYY")
                  id
                  path
                  title
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        result.data.allWordpressPost.edges.forEach(({ node }) => {
          const { content, date, id, path, title } = node;

          createPage({
            path,
            component: postTemplate,
            context: {
              content,
              date,
              id,
              title,
            },
          });
        });
      })
    );
  });
};
