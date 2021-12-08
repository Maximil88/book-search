import { GET_NEW_FRIENDS } from "../ActionTypes";

const initialState = {
  friends: ['Charlie', 'Chaplin', 'Groucho']
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEW_FRIENDS: {
      return {
        friends: action.friends
      }
    }
    default:
      return state;
  }
}

export default appReducer;
