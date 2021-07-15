// REDUCER
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      state = action.payload;
      return state;
    case 'GET_TOKEN':
      return state;
    default:
      return state;
  }
}

export default userReducer;