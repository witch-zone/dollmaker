const SET_PARTS = 'doll/set_parts'
const RANDOMISE_PARTS = 'doll/just_mess_me_up'

const setParts = (newParts) => ({
  type: SET_PARTS,
  payload: newParts,
})

const setPart = (part, value) => setParts({
  [part]: value,
})

const randomiseParts = () => ({
  type: RANDOMISE_PARTS,
})

export {
  SET_PARTS,
  RANDOMISE_PARTS,
  setParts,
  setPart,
  randomiseParts,
}
