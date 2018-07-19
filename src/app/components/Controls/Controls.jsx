import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Controls = ({
  className,
  onRandomise,
}) => (
  <div
    className={classnames(
      'c-controls',
      className,
    )}
  >
    <button
      type="button"
      onClick={onRandomise}
    >
      choose me a LOOK
    </button>
  </div>
)

Controls.propTypes = {
  className: PropTypes.string,
  onRandomise: PropTypes.func.isRequired,
}

Controls.defaultProps = {
  className: null,
}

export default Controls
