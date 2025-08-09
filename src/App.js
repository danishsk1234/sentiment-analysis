
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import SignUp from './pages/SignUp';
import InputPage from './pages/InputPage'

import AdminSignUpPage from './pages/AdminSignUpPage';
import AdminDataPage from './pages/AdminDataPage';


function App() {
  
  return (
    <div className="App w-[100%] h-[100%] bg-richblack-900 overflow-x-hidden">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/inputpage' element={<InputPage/>}></Route>
        <Route path='/adminsignuppage' element={<AdminSignUpPage/>}></Route>
        <Route path='/admindatapage' element={<AdminDataPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
