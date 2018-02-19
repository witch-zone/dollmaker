import { sort, subtract, curry } from 'ramda'

const compareOrder = curry((comparator, a, b) => {
  const aHasOrdinal = a.order !== undefined
  const bHasOrdinal = b.order !== undefined

  if (aHasOrdinal && !bHasOrdinal) {
    return -1
  }

  if (bHasOrdinal && !aHasOrdinal) {
    return 1
  }

  if (aHasOrdinal && bHasOrdinal) {
    return comparator(a.order, b.order)
  }

  return 0
})

const sortByOrder = sort(
  compareOrder((a, b) => subtract(a, b)),
)

const sortByReverseOrder = sort(
  compareOrder((a, b) => subtract(b, a)),
)

export {
  compareOrder,
  sortByReverseOrder,
}

export default sortByOrder
