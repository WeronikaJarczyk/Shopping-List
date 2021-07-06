// REDUCER
const listReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_LISTS':
      const lists = [...state, action.payload];
      return lists;
    case 'DELETE_LISTS':
      const updatedLists = action.payload.lists.filter(arr => arr.id !== action.payload.id);
      return updatedLists;
    case 'EDIT_LISTS':
      let listToEdit = action.payload.lists.filter(arr => arr.id === action.payload.id)[0];
      listToEdit.elems = action.payload.items;
      let editedLists = action.payload.lists;
      return editedLists;
    default:
      console.log(`Nie rozpoznano akcji typu ${action.type}`);
      return state;
  }
}

export default listReducer;