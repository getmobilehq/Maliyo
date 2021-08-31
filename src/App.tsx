import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./config/theme";
import Dashboard from "./pages/Dashboard";
import EnterOTP from "./pages/EnterOTP";
import Login from "./pages/Login";
import VerifyAccount from "./pages/VerifyAccount";
import VerifyEmail from "./pages/VerifyEmail";
import AuthRoute from "./routes/AuthRoute";
import CustomRoute from "./routes/CustomRoute";
import GlobalStyle from "./utils/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <Router>
        <GlobalStyle />
        <Switch>
          <CustomRoute path="/" exact component={VerifyEmail} />
          <CustomRoute path="/enter-otp" exact component={EnterOTP} />
          <CustomRoute path="/verify-account" exact component={VerifyAccount} />
          <CustomRoute path="/verify-email" exact component={VerifyEmail} />
          <AuthRoute path="/d" component={Dashboard} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
