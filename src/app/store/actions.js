const SET_PARTS = 'doll/set_parts'
const RANDOMISE_PARTS = 'doll/just_mess_me_up'
const SET_LOADING = 'doll/set_loading'
const CLEAR_LOADING = 'doll/clear_loading'

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

const setLoading = (loadingInstance) => ({
  type: SET_LOADING,
  payload: loadingInstance,
})

const clearLoading = (loadingInstance) => ({
  type: CLEAR_LOADING,
  payload: loadingInstance,
})

export {
  SET_PARTS,
  RANDOMISE_PARTS,
  SET_LOADING,
  CLEAR_LOADING,
  setParts,
  setPart,
  randomiseParts,
  setLoading,
  clearLoading,
}
