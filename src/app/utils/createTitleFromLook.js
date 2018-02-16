import { compose, sort, filter, join, prop, map, mapObjIndexed, values } from 'ramda'
import existsFilter from './existsFilter'
import sortByOrder from './sortByOrder'
import sortByWardrobeShelves from './sortByWardrobeShelves'
import mapWardrobeToShelfArray from './mapWardrobeToShelfArray'

const createTitleFromNames = compose(
  join(' '),
  map(prop('token')),
  sortByOrder,
  sortByWardrobeShelves,
  mapWardrobeToShelfArray,
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
