export default (state = {}, action) => {
  const { title, text, id } = action;
  switch (action.type) {
  case 'ADD_PROMPT':
    return Object.assign({}, state, {
      [id]: {
        title: title,
        text: text,
        id: id
      }
    });
  case 'DELETE_PROMPT':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};