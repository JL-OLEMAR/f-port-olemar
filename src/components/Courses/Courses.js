import React from 'react'
import { map } from 'lodash'
import { Image } from 'semantic-ui-react'

import dataCourses from './data'
import './Courses.scss'

const Courses = () => {
  return (
    <div className="courses">
      {map(dataCourses, (course, index) => (
        <a
          key={index}
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="courses__item"
        >
          <Image src={course.image} alt={course.title} />
        </a>
      ))}
    </div>
  )
}

export default Courses
