export const addList = (items, listName, id) => {
  if (items.length !== 0) {
    return {
      type: 'ADD_LISTS',
      payload: {
        id,
        name: listName,
        items,
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

export const settList = (lists) => {
  return {
    type: 'SET_LISTS',
    payload: {
      lists
    }
  };
}