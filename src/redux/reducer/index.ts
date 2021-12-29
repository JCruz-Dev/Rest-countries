import { combineReducers } from 'redux';

const RootReducer = combineReducers({});

export type RootStateType = ReturnType<typeof RootReducer>;

export default RootReducer;
