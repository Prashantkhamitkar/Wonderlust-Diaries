

import { Route, Routes } from 'react-router';
import Home from './Component/Home';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import SignIn from './Component/login/SignIn';

function App() {
  return (
    <>
    <Navbar/>
  <Routes>
<Route path='/' element= {<Home/>}></Route>
<Route path='/login' element= {<Login/>}></Route>
<Route path='/signin' element= {<SignIn/>}></Route>
  </Routes>
  </>
    
  );
}

export default App;
