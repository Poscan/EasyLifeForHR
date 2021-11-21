import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./Auth.css";
import Loader from "react-loader-spinner";
import {
  changeLogin,
  changePassword,
  changeRemember,
  fetchLogin,
  changeLoading,
} from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

const AuthPageLayout = ({
  info,
  changeLogin,
  changePassword,
  fetchLogin,
  changeRemember,
  changeLoading,
}) => {
  if (info.success){
      if (info.login === 'admin')
        window.open("http://192.168.43.210:8081/")
      else
        return (
          <Redirect
            to={{
              pathname: "/profile",
              state: { name: info.login },
            }}
          />
        );}
  else
    return (
      <div className="background">
        <div className="backgroundTop" />
        <div className="authForm">
          <div className="w-100 d-flex justify-content-center">
            <div className="h3 mt-5 authFormHeader">ChekItEasy</div>
          </div>
          <div className="m-5">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Логин
              </label>
              <input
                type="email"
                defaultValue={info.login}
                onChange={(e) => changeLogin(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Пароль
              </label>
              <input
                type="password"
                defaultValue={info.password}
                onChange={(e) => changePassword(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                onClick={() => changeRemember(!info.remember)}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Запомнить меня
              </label>
            </div>
            <div className="w-100 d-flex justify-content-center">
              {info.loading ? (
                <Loader type="Circles" color="#00BFFF" height={80} width={80} />
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => {
                    changeLoading(true);
                    fetchLogin(info.login, info.password);
                  }}
                >
                  Войти
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="backgroundBottom" />
      </div>
    );
};

const mapStateToProps = (state) => {
  const info = state.authReducer;
  return { info };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeLogin,
      changePassword,
      changeRemember,
      fetchLogin,
      changeLoading,
    },
    dispatch
  );

export const AuthPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthPageLayout);
