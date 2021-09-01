import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import promptListReducer from '../../reducers/prompt-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterPromptList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of promptListReducer matches root reducer', () => {
    expect(store.getState().masterPromptList).toEqual(promptListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_PROMPT action works for promptListReducer and root reducer', () => {
    const action = {
      type: 'ADD_PROMPT',
      title: 'Find the Smallest and Biggest Numbers',
      text: 'Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterPromptList).toEqual(promptListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
  
  

})