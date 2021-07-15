export const setToken = (token) => {
  return {
    type: 'SET_TOKEN',
    payload: {
      token
    }
  };
}

export const gettToken = () => {
  return {
    type: 'GET_TOKEN',
  };
}