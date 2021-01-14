import React, { Component, useContext } from 'react';
import Navbar from './Navbar';
import {Route, Switch, Redirect} from 'react-router-dom';
import { CHAT_ROUTE, LOGIN_ROUTE, privateRoutes, publicRoutes } from '../routes';
import { Context } from '../index';
import {useAuthState} from 'react-firebase-hooks/auth'


const AppRouter = () => {
    const{auth} = useContext(Context)
    const [user] = useAuthState(auth)
    console.log(user);
    return ( 
        <>
            {user ? 
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true} />
                )}
                <Redirect to={CHAT_ROUTE} />
            </Switch>
            :
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true} />
                )}
                <Redirect to={LOGIN_ROUTE} />
            </Switch>
            }
        </>
     );
}
 
export default AppRouter;