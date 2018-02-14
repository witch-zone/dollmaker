import { curry, map, toPairs, mergeDeepRight, reduce, compose, toPair } from 'ramda'

const putItemOnShelf = (shelf, item) => ({
  [shelf]: item.outfit,
})

const organiseLookIntoShelves = ([shelf, look]) => {
  const putItemOntoCurrentShelf = curry(putItemOnShelf)(shelf)
  return map(putItemOntoCurrentShelf, look)
}

const createWardrobeFromLooks = compose(
  reduce(mergeDeepRight, {}),
  map(organiseLookIntoShelves),
  toPairs,
)

export default createWardrobeFromLooks
