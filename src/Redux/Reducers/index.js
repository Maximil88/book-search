import { ADD_NEW_FRIEND, EXECUTE_SEARCH } from "../ActionTypes";

const initialState = {
  friends: ['Charlie', 'Chaplin', 'Groucho'],
  searchResults: []
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_FRIEND: {
      return {
        friends: [...state.friends, action.friend]
      }
    }
  case EXECUTE_SEARCH: {
    return Object.assign({}, state, {
      ...state,
      searchResults: [...state.searchResults,...action.searchQueryResults]
    })
  }

    default:
      return state;
  }
}

export default appReducer;
