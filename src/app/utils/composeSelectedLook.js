import { mapObjIndexed, curry } from 'ramda'

const getPieceFromLook = (looks, name, piece) => ({
  name,
  ...looks[name][piece],
})

const composeSelectedLook = (looks, selected) => (
  mapObjIndexed(
    curry(getPieceFromLook)(looks),
    selected,
  )
)

export default composeSelectedLook
