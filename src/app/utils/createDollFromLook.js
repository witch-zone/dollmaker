import { compose, map, prop, values, mapObjIndexed, tap } from 'ramda'
import sortByOrder from './sortByOrder'
import sortByWardrobeShelves from './sortByWardrobeShelves'
import mapWardrobeToShelfArray from './mapWardrobeToShelfArray'

const createDollFromOutfits = compose(
  sortByOrder,
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
