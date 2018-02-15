import queryString from 'query-string'

import * as actions from './actions'
import * as selectors from './selectors'

const getQueryParameters = () => queryString.parse(location.search)

const updateQueryParameters = (newParams) => {
  const newQueryString = queryString.stringify(newParams)

  history.replaceState(
    {}, 'Your great new Look!',
    `${location.pathname}?${newQueryString}`,
  )
}

const syncLookWithQueryString = (store) => {
  const preselectedLooks = getQueryParameters()
  store.dispatch(actions.setParts(preselectedLooks))

  store.subscribe(() => {
    const state = store.getState()
    updateQueryParameters(selectors.getSelectedParts(state))
  })
}

export default syncLookWithQueryString
