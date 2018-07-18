import { zipObj, keys, sort } from 'ramda'

const knownShelves = [
  'accessories',
  'hat',
  'glasses',
  'hair',
  'top',
  'bottom',
  'shoes',
]

const knownShelvesOrder = zipObj(
  knownShelves,
  keys(knownShelves),
)

const compareShelves = (
  { shelf: a },
  { shelf: b },
) => {
  const aOrder = knownShelvesOrder[a]
  const aHasOrder = aOrder !== undefined
  const bOrder = knownShelvesOrder[b]
  const bHasOrder = bOrder !== undefined

  if (aHasOrder && !bHasOrder) {
    return -1
  }

  if (!aHasOrder && bHasOrder) {
    return 1
  }

  if (aHasOrder && bHasOrder) {
    return aOrder - bOrder
  }

  return a.localeCompare(b)
}

const sortByShelf = sort(compareShelves)

export {
  compareShelves,
}

export default sortByShelf
