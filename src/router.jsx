import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Settings, Builds } from "./pages";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/builds">
          <Builds />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
