//action
// type:
// payload:

//note: type must match the switch it's user reducer is looking for
export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user
})

//returns an 'action' object