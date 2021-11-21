import { put, takeEvery, call } from "redux-saga/effects";
import { changeLoading, FETCH_LOGIN } from "../store/actions/authActions";

const login = (code) => {
  let requestOptions = {
    method: "POST",
    responseType: "application/json",
  };
  return fetch(
    `http://192.168.43.210:5000/Auth/api?login=${code.login}&password=${code.password}`,
    requestOptions
  );
};

function* loginWorker(code) {
  const data = yield call(login, code);
  let json = {};
  if (data.status === 204)
    json = yield call(() => new Promise((res) => res("error")));
  else json = yield call(() => new Promise((res) => res(data.json())));
  yield put(changeLoading(false, json));
}

export function* loginWatcher() {
  yield takeEvery(FETCH_LOGIN, loginWorker);
}
