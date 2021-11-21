import { put, takeEvery, call } from "redux-saga/effects";
import {
  changeLoadingGetLowRank,
  FETCH_GET_LOW_RANK,
} from "../store/actions/lowRankUserActions";

const getLowRankData = (name) => {
  let requestOptions = {
    method: "GET",
  };
  return fetch(
    `http://192.168.43.210:5000/Bill/api/username/${name.name}`,
    requestOptions
  );
};

function* getLowRankDataWorker(name) {
  const data = yield call(getLowRankData, name);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(changeLoadingGetLowRank(false, json));
}

export function* getLowRankDataWatcher() {
  yield takeEvery(FETCH_GET_LOW_RANK, getLowRankDataWorker);
}
