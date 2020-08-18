import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Aside from "./components/aside/Aside";
import AddObjectPage from "./pages/add-object-page/AddObjectPage";
import AllObjectPage from "./pages/all-object-page/AllObjectPage";
import CategoriesPage from "./pages/categories/CategoriesPage";
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Router>
                <Aside/>
                <Switch>
                    <Route path={'/add_object'} component={AddObjectPage}/>
                    <Route path={'/all_objects'} component={AllObjectPage}/>
                    <Route path={'/categories'} component={CategoriesPage}/>
                    <Redirect to="/all_objects" />
                </Switch>
            </Router>
        </div>
    )
}

export default App;
