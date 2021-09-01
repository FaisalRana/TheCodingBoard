import formVisibleReducer from './form-visible-reducer';
import promptListReducer from './prompt-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterPromptList: promptListReducer
});

export default rootReducer;