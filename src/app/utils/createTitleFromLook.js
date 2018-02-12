import { compose, sort, filter, join, prop, map, values } from 'ramda'

const existsFilter = (item) => !!item

const compareNameTokens = (a, b) => {
  const aHasOrdinal = !!a.order
  const bHasOrdinal = !!b.order

  if (!aHasOrdinal && !bHasOrdinal) {
    return 0
  }

  if (aHasOrdinal && !bHasOrdinal) {
    return -1
  }

  if (bHasOrdinal && !aHasOrdinal) {
    return 1
  }

  return a.order - b.order
}

const createTitleFromNames = compose(
  join(' '),
  map(prop('token')),
  sort(compareNameTokens),
  values,
)

const getNamesFromLooks = compose(
  filter(existsFilter),
  map(prop('name')),
)

const createTitleFromLook = compose(
  createTitleFromNames,
  getNamesFromLooks,
)

export default createTitleFromLook
