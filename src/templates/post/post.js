import React from 'react'

import BlogLayout from '../../layouts/BlogLayout/BlogLayout'
import Seo from '../../components/seo'
import TransformOembedToIframe from '../../utils/TransformOembedToIframe'
import './post.scss'

const Post = ({ pageContext }) => {
  const { data: post } = pageContext
  return (
    <BlogLayout className="post">
      <Seo
        title={post.seo_title}
        description={post.seo_description}
        image={post.miniature.publicURL}
      />
      <h1>{post.title}</h1>
      <div className="markdown-body">
        <div dangerouslySetInnerHTML={{ __html: TransformOembedToIframe(post.content) }} />
      </div>
    </BlogLayout>
  )
}

export default Post
