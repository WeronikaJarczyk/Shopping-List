// REDUCER
const listReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_LISTS':
      return [...state, action.payload];
    case 'DELETE_LISTS':
      return state.filter(arr => arr.id !== action.payload.id);
    case 'EDIT_LISTS':
      state.filter(arr => arr.id === action.payload.id)[0]
        .elems = action.payload.items;
      return state;
    default:
      return state;
  }
}

export default listReducer;