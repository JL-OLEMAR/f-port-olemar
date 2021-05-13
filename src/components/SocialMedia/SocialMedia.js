import React from 'react'
import { Icon } from 'semantic-ui-react'
import { map } from 'lodash'
import socialData from './data'
import './SocialMedia.scss'

const SocialMedia = () => {
  return (
    <div className="social-media">
      {map(socialData, (social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer">
          <Icon
            circular
            className={social.color}
            link
            name={social.name}
          />
        </a>
      ))}

    </div>
  )
}

export default SocialMedia
