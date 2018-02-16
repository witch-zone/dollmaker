import { zipObj, keys, sort } from 'ramda'

const knownShelves = [
  "hat",
  "hair",
  "top",
  "bottom",
  "shoes",
]

const knownShelvesOrder = zipObj(
  knownShelves,
  keys(knownShelves),
)

const compareWardrobeShelves = (
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

const sortByWardrobeShelves = sort(compareWardrobeShelves)

export {
  compareWardrobeShelves,
}

export default sortByWardrobeShelves
