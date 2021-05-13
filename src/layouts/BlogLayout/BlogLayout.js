import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Menu from '../../components/Menu'
import './BlogLayout.scss'

const BlogLayout = ({ children, className }) => {
  return (
    <Container
      fluid
      className={`blog-layout ${className || ''}`}
    >
      <Grid>
        <Grid.Column mobile={16} tablet={16} computer={4}>
          <Menu />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={12}>
          {children}
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default BlogLayout
