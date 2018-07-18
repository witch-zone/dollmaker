import {
  compose, filter, join, prop, map,
} from 'ramda'
import existsFilter from './existsFilter'
import sortByOrder from './sortByOrder'
import sortByShelf from './sortByShelf'
import mapWardrobeToShelfArray from './mapWardrobeToShelfArray'

const createTitleFromNames = compose(
  join(' '),
  map(prop('token')),
  sortByOrder,
  sortByShelf,
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
