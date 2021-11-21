import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { store } from "./store/reducersMerge";
import "./App.css";
import { AuthPage } from "./Pages/Auth/Auth";
import { LowRankUserPage } from "./Pages/LowRankUser/LowRankUser";
import { Navigator } from "./Components/Navigator";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </div>
  );
}

export default App;
