import { createStore } from 'redux';

const initialState = {
  exercises: [
    { id: 0, name: 'Backsquat' },
    { id: 1, name: 'Squat Clean' }
  ]
};

const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXERCISE':
      let exercises = [...state.exercises, {id: action.id, name: action.name }];
      return Object.assign({}, state, { exercises: exercises });
    default:
      return state;
  }
};

const store = createStore(exerciseReducer);
export default store;
