import { map, keys } from 'ramda'
import getRandomItem from '../../utils/getRandomItem'

const getRandomItemFromShelf = (shelf) => getRandomItem(keys(shelf))
const getRandomOutfit = map(getRandomItemFromShelf)

export default getRandomOutfit
