import { compose, prop } from 'ramda'

const getLooks = prop('looks')
const getSelectedParts = prop('doll')

export {
  getLooks,
  getSelectedParts,
}
