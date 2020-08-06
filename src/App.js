import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Aside from "./components/aside/Aside";
import AddObjectPage from "./pages/add-object-page/AddObjectPage";
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Router>
                <Aside/>
                <Switch>
                    <Route path={'/add_object'} component={AddObjectPage}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
