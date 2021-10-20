import React from 'react';
import {Router, Switch, Route} from "react-router-dom";
import {createBrowserHistory} from 'history';
import {BoardPage} from "./components/board/BoardPage";
import {BoardsPage} from "./components/boards/BoardsPage";

const App = () => {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/"><BoardsPage/></Route>
                <Route path="/board/:id"><BoardPage/></Route>
            </Switch>
        </Router>
    );
};

export default App;
