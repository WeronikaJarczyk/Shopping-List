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

export const delList = (id) => {
  return {
    type: 'DELETE_LISTS',
    payload: {
      id: id,
    }
  };
}

export const editList = (items, id) => {
  return {
    type: 'EDIT_LISTS',
    payload: {
      id: id,
      items: items
    }
  };
}