import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
} from "react-router-dom";

import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
