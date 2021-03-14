import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <h1>Plant App</h1>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
