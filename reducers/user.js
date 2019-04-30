const user = (state = { user: null }, { type, payload }) => {
  if (type === 'SAVE_USER') {
    return {
      ...state,
      user: payload,
    };
  }
  return state;
};

export default user;
