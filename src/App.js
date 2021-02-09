import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import store from "./store/store";
import {Provider} from "react-redux";
import {Auth} from "./pages/Auth/Auth";
import {Registration} from "./pages/Registration/Registration";
import {ForgotPassword} from "./pages/ForgotPassword/ForgotPassword";
import {ConfirmEmail} from "./pages/ConfirmEmail/ConfirmEmail";
import {MissedEmail} from "./pages/MissedEmail/MissedEmail";
import {EmailSent} from "./pages/EmailSent/EmailSent";

function App() {
  return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/livedune-test/">
              <Auth store={store} />
            </Route>
            <Route path="/reg">
              <Registration store={store} />
            </Route>
            <Route path="/forgot">
              <ForgotPassword store={store} />
            </Route>
            <Route path={"/confirm"}>
              <ConfirmEmail/>
            </Route>
            <Route path={"/missed"}>
              <MissedEmail store={store} />
            </Route>
            <Route path={"/sent"}>
              <EmailSent />
            </Route>
          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
