import { mapObjIndexed, values, compose } from 'ramda'

const mapTokenToShelf = (token, shelf) => ({
  ...token,
  shelf,
})

const mapWardrobeToShelfArray = compose(
  values,
  mapObjIndexed(mapTokenToShelf),
)

export {
  mapTokenToShelf,
}

export default mapWardrobeToShelfArray
