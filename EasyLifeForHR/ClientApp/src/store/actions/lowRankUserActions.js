export const FETCH_GET_LOW_RANK = "FETCH_GET_LOW_RANK";
export const CHANGE_LOADING_GET_LOW_RANK = "CHANGE_LOADING_GET_LOW_RANK";
export const CHANGE_IN_CREATE_SCREEN = "CHANGE_IN_CREATE_SCREEN";
export const CHANGE_BILL_TYPE = "CHANGE_BILL_TYPE";
export const CHANGE_COMPANY_NAME = "CHANGE_COMPANY_NAME";
export const CHANGE_AMOUNT = "CHANGE_AMOUNT";
export const CHANGE_CURRENCY = "CHANGE_CURRENCY";
export const CHANGE_COMMENT = "CHANGE_COMMENT";
export const FETCH_NEW_BILL_LOW_RANK = "FETCH_NEW_BILL_LOW_RANK";
export const CHANGE_IMAGE = "CHANGE_IMAGE";
export const CHANGE_DATE = "CHANGE_DATE";
export const CHANGE_OBSERVE_SCREEN = "CHANGE_OBSERVE_SCREEN";
export const SET_GENERATED_LINK = "SET_GENERATED_LINK";
export const FETCH_GET_LINK = "FETCH_GET_LINK";
export const CHANGE_CREATE_LOADING = "CHANGE_CREATE_LOADING";

export const changeCreateLoading = (value) => {
  console.log(value);
  return { type: CHANGE_CREATE_LOADING, value };
};
export const setGeneratedLink = (link) => {
  return { type: SET_GENERATED_LINK, link };
};
export const fetchGetLink = (name) => {
  return { type: FETCH_GET_LINK, name };
};
export const fetchGetLowRank = (name) => {
  return { type: FETCH_GET_LOW_RANK, name };
};
export const changeLoadingGetLowRank = (value, name) => {
  return { type: CHANGE_LOADING_GET_LOW_RANK, value, name };
};
export const changeInCreateScreen = (value) => {
  return { type: CHANGE_IN_CREATE_SCREEN, value };
};
export const changeObserveScreen = (id_) => {
  return { type: CHANGE_OBSERVE_SCREEN, id_ };
};
export const changeBillType = (value) => {
  return { type: CHANGE_BILL_TYPE, value };
};
export const changeCompanyName = (value) => {
  return { type: CHANGE_COMPANY_NAME, value };
};
export const changeAmount = (value) => {
  return { type: CHANGE_AMOUNT, value };
};
export const changeCurrency = (value) => {
  return { type: CHANGE_CURRENCY, value };
};
export const changeComment = (value) => {
  return { type: CHANGE_COMMENT, value };
};
export const fetchNewBillLowRank = (info, file) => {
  return { type: FETCH_NEW_BILL_LOW_RANK, info, file };
};
export const changeImage = (value) => {
  return { type: CHANGE_IMAGE, value };
};
export const changeDate = (value) => {
  return { type: CHANGE_DATE, value };
};
