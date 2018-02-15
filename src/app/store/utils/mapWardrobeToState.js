import { compose, curry, map, mapObjIndexed, values } from 'ramda'
import sortWardrobeShelves from '../../utils/sortWardrobeShelves'

const addNameToItems = (item, name) => ({
  name,
  ...item,
})

const mapItemsToPresenter = compose(
  values,
  mapObjIndexed(addNameToItems),
)

const addNameToShelves = (items, shelf) => ({
  shelf,
  items: mapItemsToPresenter(items),
})

const mapWardrobeToState = compose(
  sortWardrobeShelves,
  values,
  mapObjIndexed(addNameToShelves),
)

export default mapWardrobeToState
