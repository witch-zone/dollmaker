import { compose } from 'ramda'

import sortByOrder from './sortByOrder'
import sortByShelf from './sortByShelf'

const sortByShelfAndOrder = compose(
  sortByOrder,
  sortByShelf,
)

export default sortByShelfAndOrder
