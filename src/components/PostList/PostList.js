import React from 'react'
import { Link } from 'gatsby'
import { map } from 'lodash'
import { Card, Grid, Icon } from 'semantic-ui-react'
import moment from 'moment'
import 'moment/locale/es'

import './PostList.scss'

const PostList = ({ posts }) => {
  return (
    <Grid className="post-list">
      {
        map(posts, post => (
          <Grid.Column
            key={post.id}
            computer={5}
            mobile={16}
            tablet={16}
          >
            <Link to={`/${post.url}`}>
              <Card className="post-list__item">
                {/* <Image
                  src={post.miniature.publicURL}
                  alt={post.title}
                /> */}
                <Card.Content>
                  <Card.Header>{post.title}</Card.Header>
                </Card.Content>

                <Card.Content extra>
                  <Card.Meta>
                    <Icon name="calendar alternate outline" />
                    {moment(post.createdAt).format('LL')}
                  </Card.Meta>
                </Card.Content>
              </Card>
            </Link>
          </Grid.Column>
        ))
      }
    </Grid>
  )
}

export default PostList
