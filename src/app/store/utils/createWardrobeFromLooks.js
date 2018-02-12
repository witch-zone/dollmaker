import { curry, map, keys, mergeDeepRight } from 'ramda'

const putItemOnShelf = (name, item) => ({
  [name]: item.outfit,
})

const organiseLookIntoShelves = (name, look) => {
  const putItemOntoCurrentShelf = curry(putItemOnShelf)(name)
  return map(putItemOntoCurrentShelf, look)
}

const createWardrobeFromLooks = (looks) => (
  keys(looks).reduce(
    (wardrobe, look) => (
      mergeDeepRight(
        wardrobe,
        organiseLookIntoShelves(look, looks[look]),
      )
    ), {}
  )
)

export default createWardrobeFromLooks
