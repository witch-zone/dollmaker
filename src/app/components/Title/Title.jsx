import React from 'react'

const Title = ({
  title,
  onRandomise,
}) => (
  <div>
    <h1>{title}</h1>

    <button onClick={onRandomise}>
      choose me a LOOK
    </button>
  </div>
)

export default Title
