import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  user: {}
});

export type RootStateType = ReturnType<typeof RootReducer>;

export default RootReducer;
