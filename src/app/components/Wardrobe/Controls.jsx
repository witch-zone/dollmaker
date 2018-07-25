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
    not sure what to wear?
    &nbsp;
    <button
      className="c-plain-button"
      type="button"
      onClick={onRandomise}
    >
      let us pick a look for you!
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
