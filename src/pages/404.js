import * as React from 'react'

import BlogLayout from '../layouts/BlogLayout'
import Seo from '../components/seo'

const NotFoundPage = () => (
  <BlogLayout>
    <Seo
      // title={post.seo_title}
      title='404: Not found'
      // description={post.seo_description}
      // image={post.miniature.publicURL}
    />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </BlogLayout>
)

export default NotFoundPage
