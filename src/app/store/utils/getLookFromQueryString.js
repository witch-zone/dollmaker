import { compose, curry, __, mapObjIndexed, filter, pickBy, tap } from 'ramda'
import queryString from 'query-string'

const getQueryParameters = () => queryString.parse(location.search)

const lookExistsInWardrobe = (look, shelf, wardrobe) => (
  wardrobe[shelf] !== undefined && wardrobe[shelf][look] !== undefined
)

const filterLooksByExisting = (looks, wardrobe) => {
  const lookExistsInCurrentWardrobe = curry(lookExistsInWardrobe)(__, __, wardrobe)

  return pickBy(
    lookExistsInCurrentWardrobe,
    looks,
  )
}

const getLookFromQueryString = (wardrobe) => (
  filterLooksByExisting(
    getQueryParameters(),
    wardrobe,
  )
)

export {
  getQueryParameters,
  lookExistsInWardrobe,
  filterLooksByExisting,
}

export default getLookFromQueryString
