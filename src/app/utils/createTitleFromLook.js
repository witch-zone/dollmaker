import { compose, sort, filter, join, prop, map, mapObjIndexed, values } from 'ramda'
import existsFilter from './existsFilter'
import { compareWardrobeShelves } from './sortWardrobeShelves'

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

const mapShelfToNameToken = (token, shelf) => ({
  ...token,
  shelf,
})

const createTitleFromNames = compose(
  join(' '),
  map(prop('token')),
  sort(compareNameTokens),
  sort(compareWardrobeShelves),
  values,
  mapObjIndexed(mapShelfToNameToken),
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
