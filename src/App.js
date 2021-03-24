import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./contexts/AuthContext";
import PlantContextProvider from "./contexts/PlantContextProvider";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import PrivateRoute from "./components/PrivateRoute";
import DetailPage from "./pages/DetailPage/DetailPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <AuthProvider>
      <PlantContextProvider>
        <div className="App">
          <Switch>
            <PrivateRoute exact path="/plants/:id" component={DetailPage} />
            <PrivateRoute exact path="/explore" component={ExplorePage} />
            <PrivateRoute exact path="/" component={HomePage} />

            <Route path="/login" exact component={LoginForm} />
            <Route path="/signup" exact component={SignupForm} />
            <Route path="/welcome" component={LandingPage} />
          </Switch>
        </div>
      </PlantContextProvider>
    </AuthProvider>
  );
}

export default App;
