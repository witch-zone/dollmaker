import { curry, map, toPairs, mergeDeepRight, reduce, compose, toPair } from 'ramda'

const putItemOnShelf = (name, item) => ({
  [name]: item.outfit,
})

const organiseLookIntoShelves = ([name, look]) => {
  const putItemOntoCurrentShelf = curry(putItemOnShelf)(name)
  return map(putItemOntoCurrentShelf, look)
}

const createWardrobeFromLooks = compose(
  reduce(mergeDeepRight, {}),
  map(organiseLookIntoShelves),
  toPairs,
)

export default createWardrobeFromLooks
