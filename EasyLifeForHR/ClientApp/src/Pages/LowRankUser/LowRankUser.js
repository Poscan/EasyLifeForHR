import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./LowRankUser.css";
import {
  changeInCreateScreen,
  fetchGetLowRank,
  changeBillType,
  changeCompanyName,
  changeAmount,
  changeCurrency,
  changeComment,
  fetchNewBillLowRank,
  changeImage,
  changeDate,
  changeObserveScreen,
  fetchGetLink,
  changeCreateLoading,
} from "../../store/actions/lowRankUserActions";
import Loader from "react-loader-spinner";
import { GrAdd } from "react-icons/all";
import { Bill } from "../../Components/bill";
import Minio from "minio";
import RangePicker from "react-range-picker";
const LowRankUserPageLayout = (props) => {
  const [file, setFile] = useState();
  const UploadContent = (event) => {
    event.preventDefault();
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };
  useEffect(() => {
    props.fetchGetLowRank(props.location.state.name);
  }, []);
  if (props.info.loading)
    return (
      <div className="d-flex justify-content-center m-5">
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      </div>
    );
  else {
    return (
      <div>
        <div className="backgroundTop" />
        <div className="backgroundBottom" />
        <div className="row w-100">
          <div
            className="col-4 d-flex flex-column justify-content-start"
            style={{
              height: window.innerHeight,
              background: "white",
              boxShadow: "1px 0px 30px #5e5e5e",
            }}
          >
            <div>
              <div className="m-2 d-flex justify-content-start">
                <input
                  type="text"
                  className="form-control mx-5"
                  placeholder="Поиск"
                />
                <GrAdd
                  size={36}
                  onClick={() => {
                    props.changeObserveScreen(null);
                    props.changeInCreateScreen(!props.info.inCreateScreen);
                  }}
                />
              </div>
              <div className="m-2 d-flex justify-content-start flex-column">
                {props.info.login.map((el) => {
                  return <Bill data={el} />;
                })}
              </div>
            </div>
          </div>
          {props.info.inCreateScreen ? (
            <div
              className="col-6 offset-1"
              style={{
                height: window.innerHeight,
                background: "white",
                boxShadow: "1px 0px 30px #5e5e5e",
              }}
            >
              <div
                style={{ height: window.innerHeight }}
                className="d-flex justify-content-center flex-column"
              >
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Тип счёта
                  </label>
                  <select
                    value={props.info.bill_type}
                    onChange={(e) => {
                      props.changeBillType(e.target.value);
                    }}
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Выберите тип счёта</option>
                    <option value="sport">Спорт</option>
                    <option value="education">Образование</option>
                    <option value="coop">Коворкинг</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Компания предоставляющая услуги
                  </label>
                  <input
                    defaultValue={props.info.company_name}
                    onChange={(e) => props.changeCompanyName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Название компании"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Стоимость услуги
                  </label>
                  <input
                    defaultValue={props.info.amount}
                    onChange={(e) => props.changeAmount(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Стоимость"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Дата
                  </label>
                  <div>
                    <RangePicker
                      onDateSelected={(date) => props.changeDate(date)}
                      placeholderText="Нажмите чтобы выбрать дату"
                      styles={{ height: 100 }}
                      disableRange={true}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Валюта
                  </label>
                  <select
                    value={props.info.currency}
                    onChange={(e) => props.changeCurrency(e.target.value)}
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Выберите валюту</option>
                    <option value="RUB">RUB</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Ваш комментарий
                  </label>
                  <input
                    defaultValue={props.info.comment}
                    onChange={(e) => props.changeComment(e.target.value)}
                    type="area"
                    style={{ height: 60 }}
                    className="form-control"
                    placeholder="Комментарий"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">
                    Изображение счёта
                  </label>
                  <input
                    onChange={UploadContent}
                    accept=".png, .jpg"
                    className="form-control"
                    type="file"
                    id="formFile"
                  />
                </div>
                {props.info.createLoading ? (
                  <div className="d-flex justify-content-center">
                    <Loader
                      type="Circles"
                      color="#00BFFF"
                      height={50}
                      width={50}
                    />
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      props.changeCreateLoading(true);
                      props.fetchGetLink(file);
                      props.fetchNewBillLowRank(props.info, file);
                    }}
                    className="btn btn-primary"
                  >
                    Отправить
                  </div>
                )}
                <div className="d-flex justify-content-center"></div>
              </div>
            </div>
          ) : props.info.inObserveScreen ? (
            <div
              className="col-6 offset-1"
              style={{
                height: window.innerHeight,
                background: "white",
                boxShadow: "1px 0px 30px #5e5e5e",
              }}
            >
              <div
                style={{ height: window.innerHeight }}
                className="d-flex justify-content-center flex-column"
              >
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Тип счёта
                  </label>
                  <div className="form-label fw-bold">
                    {props.info.currentBill.type.name}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Компания предоставляющая услугу
                  </label>
                  <div className="form-label fw-bold">
                    {props.info.currentBill.name}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Стоимость
                  </label>
                  <div className="form-label fw-bold">
                    {props.info.currentBill.amount}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Дата
                  </label>
                  <div className="form-label fw-bold">
                    {props.info.currentBill.date.toString().slice(0, 10)}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Комментарий
                  </label>
                  <div className="form-label fw-bold">
                    {props.info.currentBill.comment}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Статус
                  </label>
                  <div className="form-label fw-bold">
                    {props.info.currentBill.status.status}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <br />
          )}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const info = state.lowRankReducer;
  return { info };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchGetLowRank,
      changeObserveScreen,
      changeInCreateScreen,
      changeImage,
      changeBillType,
      changeDate,
      changeCompanyName,
      changeAmount,
      changeCurrency,
      changeComment,
      fetchNewBillLowRank,
      fetchGetLink,
      changeCreateLoading,
    },
    dispatch
  );

export const LowRankUserPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LowRankUserPageLayout);
