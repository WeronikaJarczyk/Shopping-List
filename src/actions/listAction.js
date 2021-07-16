export const addList = (items, listName, _id) => {
  if (items.length !== 0) {
    return {
      type: 'ADD_LISTS',
      payload: {
        _id,
        name: listName,
        items,
      }
    };
  }
}

export const delList = (_id) => {
  return {
    type: 'DELETE_LISTS',
    payload: {
      _id,
    }
  };
}

export const editList = (items, _id) => {
  return {
    type: 'EDIT_LISTS',
    payload: {
      _id,
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