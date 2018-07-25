import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Title = ({
  title,
  className,
}) => (
  <h1
    className={classnames(
      'c-title',
      className,
    )}
  >
    {title}
  </h1>
)

Title.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
}

Title.defaultProps = {
  title: 'Your new look',
  className: null,
}

export default Title
