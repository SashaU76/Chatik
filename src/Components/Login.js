import { Button, Container, Grid, Box } from "@material-ui/core";
import { useContext } from "react";
import {Context} from '../index'
import firebase from 'firebase'


const Login = () => {
    const {auth} = useContext(Context)
    
    const login = async ()=>{
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user}= await auth.signInWithPopup(provider)
        console.log(user);
    }

    return (
        <Container>
            <Grid container style={{height: window.innerHeight -90}}
            alignItems={'center'}
            justify={'center'}
            >
                <Grid style={{width:400, background:'lightgray'}}
                container
                alignItems={'center'}
                direction={'column'}>
                    <Box p={5} variant={'outlined'}>
                        <Button onClick={login}>Log in with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
      );
}
 
export default Login;