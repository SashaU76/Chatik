import {BrowserRouter} from 'react-router-dom'
import './App.css';
import AppRouter from './Components/AppRouter';
import Navbar from './Components/Navbar';
import { Context } from './index';
import {useAuthState} from 'react-firebase-hooks/auth'
import Loader from './Components/Loader';
import { useContext } from 'react';

function App() {
  const{auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)
  /* if(loading){
    return <><Loader /> sdfsdf</> 
  } */
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
