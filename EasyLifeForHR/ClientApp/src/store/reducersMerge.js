import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { authReducer } from "./reducers/authReducer";
import { rootWatcher } from "../saga/index";
import { lowRankReducer } from "./reducers/lowRankUserReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  authReducer,
  lowRankReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
