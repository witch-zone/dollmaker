import { sort } from 'ramda'

const compareOrder = (a, b) => {
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

const sortByOrder = sort(compareOrder)

export {
  compareOrder,
}

export default sortByOrder
