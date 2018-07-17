import { compose, map, prop, values, mapObjIndexed, tap, filter } from 'ramda'
import { sortByReverseOrder } from './sortByOrder'
import sortByShelf from './sortByShelf'
import mapWardrobeToShelfArray from './mapWardrobeToShelfArray'

const createDollFromOutfits = compose(
  sortByReverseOrder,
  sortByShelf,
  mapWardrobeToShelfArray,
)

const hasOutfitPiece = (outfit) => !!outfit.src

const getOutfitsFromLooks = compose(
  filter(hasOutfitPiece),
  map(prop('outfit')),
)

const createDollFromLook = compose(
  createDollFromOutfits,
  getOutfitsFromLooks,
)

export {
  createDollFromOutfits,
  getOutfitsFromLooks,
}

export default createDollFromLook
