import React from 'react';
import BoardsPage from "./components/boards/BoardsPage";
import {Router, Switch, Route} from "react-router-dom";
import {createBrowserHistory} from 'history';

const App = () => {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/"><BoardsPage/></Route>
                <Route path="/:id"></Route>
            </Switch>
        </Router>
    );
};

export default App;
