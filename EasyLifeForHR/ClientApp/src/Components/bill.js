import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  changeInCreateScreen,
  changeObserveScreen,
} from "../store/actions/lowRankUserActions";

const billLayout = ({ data, changeInCreateScreen, changeObserveScreen }) => {
  const clickHandler = () => {
    changeInCreateScreen(false);
    changeObserveScreen(data.id);
  };
  return (
    <div
      onClick={clickHandler}
      className="row w-100 d-flex justify-content-center align-items-center border-bottom border-primary"
      style={{ height: 85 }}
    >
      <div className="col-3">
        <div
          className="rounded-circle"
          style={{ height: 60, width: 60, background: "#53aefd" }}
        />
      </div>
      <div className="col-9">
        <span style={{ fontWeight: 800 }}>{data.user.username}</span>
        <br />
        <span>{data.type.name} </span>
        <span>{data.status.status}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const info = state.lowRankReducer;
  return { info };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeInCreateScreen,
      changeObserveScreen,
    },
    dispatch
  );

export const Bill = connect(mapStateToProps, mapDispatchToProps)(billLayout);
