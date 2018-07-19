import {
  map, keys, omit, compose,
} from 'ramda'

import getRandomItem from '../../utils/getRandomItem'

const excludedShelves = [
  'glasses',
  'sparkle',
]

const getRandomItemFromShelf = (shelf) => getRandomItem(keys(shelf))

const getRandomOutfit = compose(
  map(getRandomItemFromShelf),
  omit(excludedShelves),
)

export default getRandomOutfit
