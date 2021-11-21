import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthPage } from "../Pages/Auth/Auth";
import { LowRankUserPage } from "../Pages/LowRankUser/LowRankUser";
const NavbarLayout = ({}) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/profile"
            render={(props) => <LowRankUserPage {...props} />}
          />
          <Route path="">
            <AuthPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export const Navigator = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarLayout);
