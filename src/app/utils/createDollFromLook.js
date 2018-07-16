import { compose, map, prop, values, mapObjIndexed, tap } from 'ramda'
import { sortByReverseOrder } from './sortByOrder'
import sortByShelf from './sortByShelf'
import mapWardrobeToShelfArray from './mapWardrobeToShelfArray'

const createDollFromOutfits = compose(
  sortByReverseOrder,
  sortByShelf,
  mapWardrobeToShelfArray,
)

const getOutfitsFromLooks = map(prop('outfit'))

const createDollFromLook = compose(
  createDollFromOutfits,
  getOutfitsFromLooks,
)

export {
  createDollFromOutfits,
  getOutfitsFromLooks,
}

export default createDollFromLook
