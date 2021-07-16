// REDUCER
const listReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LISTS':
      return [...state, action.payload];
    case 'DELETE_LISTS':
      return state.filter(arr => arr._id !== action.payload._id);
    case 'EDIT_LISTS':
      state.find(arr => arr._id === action.payload._id)
        .items = action.payload.items;
      return state;
    case 'SET_LISTS':
      return action.payload.lists;
    default:
      return state;
  }
}

export default listReducer;