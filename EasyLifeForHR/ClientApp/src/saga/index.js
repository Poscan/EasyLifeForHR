import { all } from "redux-saga/effects";
import { loginWatcher } from "./loginSaga";
import { getLowRankDataWatcher } from "./getLowRankUserDataSaga";
import { newBillLowRankDataWatcher } from "./newBillLowRankUserSaga";
import { getLinkWorkerWatcher } from "./getLinkSaga";

export function* rootWatcher() {
  yield all([
    loginWatcher(),
    getLowRankDataWatcher(),
    newBillLowRankDataWatcher(),
    getLinkWorkerWatcher(),
  ]);
}
