import React from 'react';
import {AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import { LOGIN_ROUTE } from '../routes';
import { NavLink } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from '../index';
import  {  useContext } from 'react';

const Navbar = () => {
    const{auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <>
        <AppBar color={'secondary'} position="static">
            <Toolbar >
                <Grid container justify={'flex-end'}>
                    {user ? <Button onClick={()=> auth.signOut()} variant={'outlined'}>LogOut</Button>
                    : 
                    <NavLink to={LOGIN_ROUTE}>
                    <Button variant={'outlined'}>LogIn</Button>
                    </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
        </>
    );
}
 
export default Navbar;