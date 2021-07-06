import nextId from 'react-id-generator';

export const addList = (elems, listName) => {
  if (elems.length !== 0) {
    return {
      type: 'SET_LISTS',
      payload: {
        id: nextId(),
        name: listName,
        elems,
      }
    };
  }
}

export const delList = (id, lists) => {
  return {
    type: 'DELETE_LISTS',
    payload: {
      id: id,
      lists: lists
    }
  };
}

export const editList = (items, id, lists) => {
  return {
    type: 'EDIT_LISTS',
    payload: {
      id: id,
      lists: lists,
      items: items
    }
  };
}