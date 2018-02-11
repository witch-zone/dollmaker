const SET_PARTS = 'doll/set_parts'
const RANDOMISE_PARTS = 'doll/just_mess_me_up'

const setPart = (part, value) => setParts({
  [part]: value,
})

const setParts = (newParts) => ({
  type: SET_PARTS,
  payload: newParts,
})

const randomiseParts = () => ({
  type: RANDOMISE_PARTS,
})

export {
  SET_PARTS,
  RANDOMISE_PARTS,
  setPart,
  setParts,
  randomiseParts,
}
