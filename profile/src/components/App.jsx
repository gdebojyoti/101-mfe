import { useEffect } from "react";
import { Link, Switch, Route, Router, useLocation, useSearch } from "wouter";

import Settings from "./Settings";

const App = ({ location, onNavigate }) => {
  return (
    <>
      <h1>Profile app</h1>
      
      <Router base="/profile" hook={location.hook}>
        <Routes onNavigate={onNavigate} />
      </Router>
    </>
  )
}

const Routes = ({ onNavigate }) => {
  const [loc] = useLocation();

  useEffect(() => {
    onNavigate && onNavigate(loc);
  }, [loc])

  return (
    <>
      <Link href="/">Profile home</Link>
      &nbsp;
      <Link href="/settings">Profile settings</Link>

      <Switch>
        <Route path="/">
          <h2>This is your profile</h2>
        </Route>

        <Route path="/settings" component={Settings} />

        <Route>404: Missing sub-route in Profile app</Route>
      </Switch>
    </>
  )
}

export default App;