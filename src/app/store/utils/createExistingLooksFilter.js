import { compose, curry, __, mapObjIndexed, filter, pickBy, tap } from 'ramda'

const lookExistsInWardrobe = (look, shelf, wardrobe) => (
  wardrobe[shelf] !== undefined && wardrobe[shelf][look] !== undefined
)

const createExistingLooksFilter = (wardrobe) => {
  const lookExistsInCurrentWardrobe = curry(lookExistsInWardrobe)(__, __, wardrobe)

  return (looks) => pickBy(
    lookExistsInCurrentWardrobe,
    looks,
  )
}

export {
  lookExistsInWardrobe,
}

export default createExistingLooksFilter
