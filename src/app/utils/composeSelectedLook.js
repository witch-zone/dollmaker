const composeSelectedLook = (looks, selected) => (
  Object.keys(selected).reduce(
    (fullLook, piece) => {
      const selectedPiece = selected[piece]
      const selectedLook = looks[selectedPiece]

      if (!selectedLook) {
        return fullLook
      }

      return {
        ...fullLook,
        [piece]: {
          name: selectedPiece,
          ...selectedLook[piece],
        },
      }
    }, {}
  )
)

export default composeSelectedLook
