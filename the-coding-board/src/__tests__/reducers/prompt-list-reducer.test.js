import promptListReducer from '../../reducers/prompt-list-reducer';

describe('promptListReducer', () => {

  const currentState = {
    1: {title: 'Find the Smallest and Biggest Numbers',
    text: 'Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.',
    id: 1 },
    2: {title: 'Drink Sorting',
    text: 'You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.',
    id: 2 }
  }

  let action;
  const promptData = {
    title: 'Find the Smallest and Biggest Numbers',
    text: 'Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(promptListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new ticket data to masterPromptList', () => {
    const { title, text, id } = promptData;
    action = {
      type: 'ADD_PROMPT',
      title: title,
      text: text,
      id: id
    };

    expect(promptListReducer({}, action)).toEqual({
      [id] : {
        title: title,
        text: text,
        id: id
      }
    });
  });

  test('Should successfully delete a prompt', () => {
    action = {
      type: 'DELETE_PROMPT',
      id: 1
    };

    expect(promptListReducer(currentState, action)).toEqual({
      2: {title: 'Drink Sorting',
        text: 'You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.',
        id: 2 }
    });
  });
  
});
