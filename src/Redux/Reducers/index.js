import { ADD_NEW_FRIEND } from "../ActionTypes";

const initialState = {
  friends: ['Charlie', 'Chaplin', 'Groucho']
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_FRIEND: {
      return {
        friends: [...state.friends,action.friend]
      }
    }
    default:
      return state;
  }
}

export default appReducer;
