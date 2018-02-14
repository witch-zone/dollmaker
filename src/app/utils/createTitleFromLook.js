import { compose, sort, filter, join, prop, map, toPairs } from 'ramda'
import { compareWardrobeShelves } from './sortWardrobeShelves'

const existsFilter = (item) => !!item

const compareNameTokens = (a, b) => {
  const aHasOrdinal = a.order !== undefined
  const bHasOrdinal = b.order !== undefined

  if (aHasOrdinal && !bHasOrdinal) {
    return -1
  }

  if (bHasOrdinal && !aHasOrdinal) {
    return 1
  }

  if (aHasOrdinal && bHasOrdinal) {
    return a.order - b.order
  }

  return 0
}

const mapShelfToNameToken = ([shelf, token]) => ({
  ...token,
  shelf,
})

const createTitleFromNames = compose(
  join(' '),
  map(prop('token')),
  sort(compareNameTokens),
  sort(compareWardrobeShelves),
  map(mapShelfToNameToken),
  toPairs,
)

const getNamesFromLooks = compose(
  filter(existsFilter),
  map(prop('title')),
)

const createTitleFromLook = compose(
  createTitleFromNames,
  getNamesFromLooks,
)

export default createTitleFromLook
