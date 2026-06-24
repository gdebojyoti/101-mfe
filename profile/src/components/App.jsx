import { Link, Switch, Route } from "wouter";

import Settings from "./Settings";

const App = () => {
  return (
    <>
      <h1>Profile app</h1>

      <Link href="/profile">Profile base</Link>
      <Link href="/profile/settings">Profile settings</Link>
      
      <Switch>
        <Route href="/">
          <h2>This is your profile</h2>
        </Route>

        <Route href="/settings" component={Settings} />

        <Route>404: Missing sub-route in Profile app</Route>
      </Switch>
    </>
  )
}

export default App;