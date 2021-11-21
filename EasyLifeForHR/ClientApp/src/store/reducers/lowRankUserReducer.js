import {
  CHANGE_AMOUNT,
  CHANGE_BILL_TYPE,
  CHANGE_COMMENT,
  CHANGE_COMPANY_NAME,
  CHANGE_CREATE_LOADING,
  CHANGE_CURRENCY,
  CHANGE_DATE,
  CHANGE_IMAGE,
  CHANGE_IN_CREATE_SCREEN,
  CHANGE_LOADING_GET_LOW_RANK,
  CHANGE_OBSERVE_SCREEN,
  SET_GENERATED_LINK,
} from "../actions/lowRankUserActions";

const INITIAL_STATE_LOW_RANK = {
  login: "",
  loading: true,
  createLoading: false,
  success: false,
  bills: [],
  currentBill: null,
  inCreateScreen: false,
  inObserveScreen: null,
  bill_type: "",
  company_name: "",
  amount: "",
  currency: "",
  comment: "",
  image: "",
  date: "",
  generated_link: null,
};

export const lowRankReducer = (state = INITIAL_STATE_LOW_RANK, action) => {
  switch (action.type) {
    case SET_GENERATED_LINK:
      console.log(action.link.link);
      return {
        ...state,
        generated_link: action.link.link,
      };
    case CHANGE_LOADING_GET_LOW_RANK:
      if (action.login !== undefined)
        return {
          ...state,
          loading: false,
          login: action.name,
          bills: action.login,
        };
      else
        return {
          ...state,
          loading: action.value,
          login: action.name,
          bills: action.login,
        };
    case CHANGE_CREATE_LOADING:
      if (!action.value) {
        return {
          ...state,
          createLoading: false,
          success: false,
          bills: [],
          currentBill: null,
          inCreateScreen: false,
          inObserveScreen: null,
          bill_type: "",
          company_name: "",
          amount: "",
          currency: "",
          comment: "",
          image: "",
          date: "",
        };
      }
      return {
        ...state,
        createLoading: action.value,
      };
    case CHANGE_IN_CREATE_SCREEN:
      return {
        ...state,
        inCreateScreen: action.value,
      };
    case CHANGE_OBSERVE_SCREEN:
      let currentBill = {};
      state.login.map((el) => {
        if (el.id === action.id_) currentBill = el;
      });
      return {
        ...state,
        inObserveScreen: action.id_,
        currentBill,
      };
    case CHANGE_BILL_TYPE:
      return {
        ...state,
        bill_type: action.value,
      };
    case CHANGE_COMPANY_NAME:
      return {
        ...state,
        company_name: action.value,
      };
    case CHANGE_AMOUNT:
      return {
        ...state,
        amount: action.value,
      };
    case CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.value,
      };
    case CHANGE_COMMENT:
      return {
        ...state,
        comment: action.value,
      };
    case CHANGE_IMAGE:
      return {
        ...state,
        image: action.value,
      };
    case CHANGE_DATE:
      return {
        ...state,
        date: action.value,
      };
    default:
      return state;
  }
};
