const mapShelfToPresenter = (shelf) => (
  Object.keys(shelf).map(
    (item) => ({
      name: item,
      ...shelf[item],
    })
  )
)

const mapWardrobeToState = (wardrobe) => (
  Object.keys(wardrobe).map(
    (shelf) => ({
      name: shelf,
      items: mapShelfToPresenter(wardrobe[shelf]),
    })
  )
)

export default mapWardrobeToState
