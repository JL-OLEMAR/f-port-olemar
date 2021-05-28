import React from 'react'
import { graphql } from 'gatsby'

import BlogLayout from '../layouts/BlogLayout'
import Seo from '../components/seo'
import PostList from '../components/PostList'
import Pagination from '../components/Pagination/Pagination'
import imageBlog from '../images/web-programacion.jpg'

const Blog = ({ data, pageContext }) => {
  const posts = data.allStrapiPost.nodes
  return (
    <BlogLayout>
      <Seo
        title="Blog sobre programación"
        description="Web sobre Desarrollo Web, programación JavaScript, React, Node, Next, Gatsby, Angular..."
        image={imageBlog}
      />
      <PostList posts={posts} />
      <Pagination pageContext={pageContext} />
    </BlogLayout>
  )
}
export const query = graphql`
    query($skip: Int!, $limit: Int!) {
      allStrapiPost(
        skip: $skip
        limit: $limit
        sort: {fields: createdAt, order: DESC}
      ) {
        nodes {
          id
          title
          url
          content
          createdAt
        }
      }
    }
`

export default Blog
