const getTitleKeysForLook = (looks, selected) => (
  Object.keys(selected).filter(
    part => !!selected[part]
  ).map(
    part => {
      const selectedLook = selected[part]
      return looks[selectedLook][part].name
    }
  ).filter(
    lookName => !!lookName,
  ).sort(
    (a, b) => a.order - b.order
  )
)

const createTitleFromLook = (looks, selected) => (
  getTitleKeysForLook(
    looks, selected
  ).map(
    key => key.token,
  ).join(
    ' '
  )
)

export default createTitleFromLook
