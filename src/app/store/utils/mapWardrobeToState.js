import { compose, curry, map, toPairs } from 'ramda'
import sortWardrobeShelves from '../../utils/sortWardrobeShelves'

const mapItemToPresenter = ([name, item]) => ({
  name,
  ...item,
})

const mapItemsToState = compose(
  map(mapItemToPresenter),
  toPairs,
)

const mapShelfToPresenter = ([shelf, items]) => ({
  shelf,
  items: mapItemsToState(items),
})

const mapWardrobeToState = compose(
  sortWardrobeShelves,
  map(mapShelfToPresenter),
  toPairs,
)

export default mapWardrobeToState
