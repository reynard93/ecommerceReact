const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_CURRENT__USER':
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}


export default userReducer;