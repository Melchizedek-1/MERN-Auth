import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./components/routing/PrivateRoute";

import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import Test from "./components/screens/Test";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <PrivateRoute exact path="/" element={<PrivateScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route
            exact
            path="/forgot/password"
            element={<ForgotPasswordScreen />}
          />
          <Route exact path="/test" element={<Test />} />
          <Route
            exact
            path="/password/reset/:resetToken"
            element={<ResetPasswordScreen />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
