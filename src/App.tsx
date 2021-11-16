import React from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {BoardPage} from './components/board/BoardPage';
import {BoardsPage} from './components/boards/BoardsPage';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "./store/RootState";

const App = () => {
  const history = createBrowserHistory();

  const dispatch = useDispatch();
  const cash = useSelector<RootState>(state => state.cash);
  console.log("Cash ", cash);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <BoardsPage />
        </Route>
        <Route path="/board/:id">
          <BoardPage />
        </Route>
        <Redirect to={'/'} />
      </Switch>
    </Router>
  );
};

export default App;
