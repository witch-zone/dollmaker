import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Title from './Title'
import Doll from './Doll'

const Mirror = ({
  layers,
  title,
  isLoading,
  onStartLoad,
  onFinishLoad,
  className,
}) => (
  <section
    className={classnames(
      'c-doll-wrapper',
      className,
    )}
  >
    <Title
      title={title}
      className="c-doll-wrapper__title"
    />

    <Doll
      layers={layers}
      onStartLoad={onStartLoad}
      onFinishLoad={onFinishLoad}
      className={classnames(
        'c-doll-wrapper__doll',
        {
          'c-doll-wrapper__doll--is-loading': isLoading,
        },
      )}
    />

    <div
      className={classnames(
        'c-doll-wrapper__message',
        {
          'c-doll-wrapper__message--is-loading': isLoading,
        },
      )}
    >
      Conjuring look&hellip;

      <span className="c-throbber">
        ♡
      </span>
    </div>
  </section>
)

Mirror.propTypes = {
  layers: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
  })),
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  onStartLoad: PropTypes.func.isRequired,
  onFinishLoad: PropTypes.func.isRequired,
  className: PropTypes.string,
}

Mirror.defaultProps = {
  layers: [],
  title: null,
  isLoading: false,
  className: null,
}

export default Mirror
