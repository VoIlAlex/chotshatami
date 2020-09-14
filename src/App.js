import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import AddObjectPage from "./pages/add-object-page/AddObjectPage";
import AllObjectPage from "./pages/all-object-page/AllObjectPage";
import CategoriesPage from "./pages/categories/CategoriesPage";
import SignInPage from "./pages/sign-in-page/SignInPage";
import ResetPasswordPage from "./pages/reset-password-page/ResetPasswordPage";
import ShowAside from "./components/aside/ShowAside";
import './App.css';

const App = props => {
    const [showAside, setShowAside] = useState(true)
    return (
        <div className="app">
            <Router>
                {
                    !localStorage.getItem('access_token') ? <Switch>
                        <Route
                            path={'/login'}
                            component={SignInPage}
                        />
                        <Route
                            path={'/reset_password'}
                            component={ResetPasswordPage}
                        />
                        <Redirect to="/login"/>
                    </Switch> : <>
                        <ShowAside show={showAside} setShow={setShowAside}/>
                        <Switch>
                            <Route
                                path={'/add_object'}
                                render={() => <AddObjectPage
                                    width={showAside ? '80%' : '100%'}
                                    margin={showAside ? '0 0 5vh 18vw' : '0 0 5vh 7vw'}
                                />}
                            />
                            <Route
                                path={'/all_objects'}
                                render={() => <AllObjectPage
                                    width={showAside ? '80%' : '90%'}
                                    margin={showAside ? '0 0 5vh 18vw' : '0 0 5vh 7vw'}
                                />}
                            />
                            <Route
                                path={'/categories'}
                                render={() => <CategoriesPage
                                    width={showAside ? '80%' : '90%'}
                                    margin={showAside ? '0 0 5vh 18vw' : '0 0 5vh 7vw'}
                                />}
                            />
                            <Redirect to="/all_objects"/>
                        </Switch>
                    </>
                }
            </Router>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user.loginSuccess
})

export default connect(mapStateToProps)(App);
