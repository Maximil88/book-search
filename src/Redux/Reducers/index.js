import { ADD_NEW_FRIEND, EXECUTE_SEARCH, EXECUTE_SEARCH_FAIL } from "../ActionTypes";

const initialState = {
  friends: ['Charlie', 'Chaplin', 'Groucho'],
  searchResults: [],
  searchResultsFailMessage: null
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case EXECUTE_SEARCH: {
      return Object.assign({}, state, {
        ...state,
        searchResults: [...state.searchResults,...action.searchQueryResults]
      })
    }
  case EXECUTE_SEARCH_FAIL: {
    return Object.assign({}, state, {
      ...state,
      searchResultsFailMessage: action.errorMessage
    })
  }

    default:
      return state;
  }
}

export default appReducer;
