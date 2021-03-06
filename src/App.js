import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./contexts/AuthContext";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import PrivateRoute from "./components/PrivateRoute";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h1>Plant App</h1>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/plants/:id" component={DetailPage} />
          <Route path="/signup" exact component={SignupForm} />
          <Route path="/login" exact component={LoginForm} />
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
