import { compose, curry, map, toPairs } from 'ramda'

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
  map(mapShelfToPresenter),
  toPairs,
)

export default mapWardrobeToState
