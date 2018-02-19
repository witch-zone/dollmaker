import { compose, map, prop, values, mapObjIndexed, tap } from 'ramda'
import { sortByReverseOrder } from './sortByOrder'
import sortByWardrobeShelves from './sortByWardrobeShelves'
import mapWardrobeToShelfArray from './mapWardrobeToShelfArray'

const createDollFromOutfits = compose(
  sortByReverseOrder,
  sortByWardrobeShelves,
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
