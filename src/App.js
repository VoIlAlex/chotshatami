import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Aside from "./components/aside/Aside";
import AddObjectPage from "./pages/add-object-page/AddObjectPage";
import AllObjectPage from "./pages/all-object-page/AllObjectPage";
import CategoriesPage from "./pages/categories/CategoriesPage";
import './App.css';

const App = () => {
    const [showAside, setShowAside] = useState(true)
    return (
        <div className="app">
            <Router>
                <Aside show={showAside} setShow={setShowAside}/>
                <Switch>
                    <Route
                        path={'/add_object'}
                        render={() => <AddObjectPage
                            width={showAside ? '80%' : '100%'}
                            margin={showAside ? '0' : '0 100px 0 0'}
                        />}/>
                    <Route
                        path={'/all_objects'}
                        render={() => <AllObjectPage
                            width={showAside ? '80%' : '90%'}
                            margin={showAside ? '0' : '0 100px 0 0'}
                        />}/>
                    <Route
                        path={'/categories'}
                        render={() => <CategoriesPage
                            width={showAside ? '80%' : '90%'}
                            margin={showAside ? '0' : '0 100px 0 0'}
                        />}/>
                    <Redirect to="/all_objects"/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
