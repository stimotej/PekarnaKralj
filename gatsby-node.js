const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.onCreateNode = async ({ node, actions, store, cache }) => {
  const { createNode, createNodeField } = actions

  if (node.internal.type !== null && node.internal.type === "StrapiAbout") {
    for (const image of node.images) {
      const fileNode = await createRemoteFileNode({
        url: "http://localhost:1337" + image.url,
        store,
        cache,
        createNode,
        createNodeId: id => image.id.toString(),
      })

      if (fileNode) {
        image.localFile___NODE = fileNode.id
      }
    }
  }
}
