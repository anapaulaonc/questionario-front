import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Login from './pages/login/login';
import ForYou from './pages/foryou/foryou';
import SignUp from './pages/signUp/signUp'
import RecoverPassword from './pages/recoverPassword/recoverPassword';

// Usar comando << npm install react-router-dom >> para instalar o pacote de rotas.

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/login">
                <Login/>
            </Route>
            <Route exact path = "/signUp">
                <SignUp/>
            </Route>
            <Route exact path = "/">
                <Login/>
            </Route>
            <Route exact path = "/recoverPassword">
                <RecoverPassword/>
            </Route>
            <Route exact path = "/forYou">
                <ForYou/>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;