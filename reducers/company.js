const company = (state = { company: null }, { type, payload }) => {
  if (type === 'SAVE_COMPANY') {
    return {
      ...state,
      company: payload,
    };
  }
  return state;
};

export default company;
