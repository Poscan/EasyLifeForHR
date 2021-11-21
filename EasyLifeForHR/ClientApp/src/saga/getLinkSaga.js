import { put, takeEvery, call } from "redux-saga/effects";
import { changeLoading, FETCH_LOGIN } from "../store/actions/authActions";
import {
  FETCH_GET_LINK,
  setGeneratedLink,
} from "../store/actions/lowRankUserActions";

const getLink = (file) => {
  let formdata = new FormData();
  formdata.append("image", file.name, "name.png");

  let requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  return fetch("http://176.57.217.201:1111/api/send_image", requestOptions);
};

function* getLinkWorker(code) {
  const data = yield call(getLink, code);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setGeneratedLink(json));
}

export function* getLinkWorkerWatcher() {
  yield takeEvery(FETCH_GET_LINK, getLinkWorker);
}
