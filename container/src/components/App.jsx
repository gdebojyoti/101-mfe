import { Link, Route, Switch } from "wouter";

import Profile from "./Profile";

const App = () => {
  return (
    <>
      {/* nav */}
      <Link href="/">Home</Link>
      &nbsp;
      <Link href="/profile">Profile</Link>

      {/* routes */}
      <Switch>
        <Route path="/">
          <h1>101: MFE</h1>
        </Route>
        
        <Route path="/profile" component={Profile} />

        <Route>
          <h1>404: No such page!</h1>
        </Route>
      </Switch>
    </>
  )
}

export default App;
