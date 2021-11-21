import { put, takeEvery, call } from "redux-saga/effects";
import {
  changeCreateLoading,
  FETCH_NEW_BILL_LOW_RANK,
  setGeneratedLink,
} from "../store/actions/lowRankUserActions";

const newBillLowRankData = (info) => {
  const data = info.info;
  console.log(data);
  let options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 0,
      date: data.date,
      name: data.company_name,
      type: {
        id:
          data.bill_type === "sport"
            ? 1
            : data.bill_type === "education"
            ? 3
            : 2,
        name: "1",
      },
      status: {
        id: 1,
        status: "1",
      },
      user: {
        id: 1,
        mail: "1",
        role: {
          id: 1,
          name: "1",
        },
        username: "1",
        passhash: "1",
        limitRefundMoney: 0,
      },
      link: data.generated_link,
      comment: data.comment,
      frequency: {
        id: 1,
        name: "1",
      },
      endDate: null,
      amount: Number(data.amount),
    }),
  };

  return fetch("http://192.168.43.210:5000/Bill/api", options);
};

function* newBillLowRankDataWorker(info, file) {
  const data = yield call(newBillLowRankData, info, file);
  yield put(changeCreateLoading(false, data));
}

export function* newBillLowRankDataWatcher() {
  yield takeEvery(FETCH_NEW_BILL_LOW_RANK, newBillLowRankDataWorker);
}
