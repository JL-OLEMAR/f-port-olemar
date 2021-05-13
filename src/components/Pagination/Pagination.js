import React from 'react'
import PropType from 'prop-types'
import { Link } from 'gatsby'

import './Pagination.scss'

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <div className="pagination">
      {previousPagePath && <Link to={previousPagePath}>Atras </Link>}
      {nextPagePath && <Link to={nextPagePath}> Siguiente</Link>}
    </div>
  )
}

Pagination.propType = {
  pageContext: PropType.object.isRequired
}

export default Pagination
