import React from 'react'
import PropTypes from 'prop-types'

const Title = ({
  title,
}) => (
  <h1 className="c-title">
    {title}
  </h1>
)

Title.propTypes = {
  title: PropTypes.string,
}

Title.defaultProps = {
  title: 'Your new look',
}

export default Title
