import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Login from './Admin/Login';
// import Home from './Users/Home';
import Register from './Admin/Register';
import Index from './Admin/Index';
import Dashbord from './Admin/Dashbord';
import Logout from './Admin/Logout';
import Add_doctor from './Admin/Add_doctor';
import Side_bar from './Admin/Side_bar';
import Header from './Admin/Header';
import All_doctors from './Admin/All_doctors';
import Doctor_detail from './Admin/Doctor_detail';
import Add_appoinment from './Admin/Add_appoinment';
import All_appoinment from './Admin/All_appoinment';
import Doctor_sidebar from './Admin/Doctor_sidebar';


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Index/>}></Route>
        
        <Route path="/login" element={ (window.localStorage.getItem('id')===null)?<Login/>:<Dashbord /> } />
        <Route path="/Dashbord" element={ window.localStorage.getItem('id')!==null?<Dashbord/>:<Login /> } />
        <Route path="/Register" element={ window.localStorage.getItem('id')!==null?<Dashbord/>:<Register/> } />


        {/* <Route path="/" element={ (window.localStorage.getItem('id')===null)?<Login/>:<Index /> } />
        <Route path="/Index" element={ window.localStorage.getItem('id')!==null?<Index/>:<Login /> } />
        <Route path="/Register" element={ window.localStorage.getItem('id')!==null?<Index/>:<Register/> } />
        {/* <Route path="/" element={<Login/>}></Route>  */}
        <Route path="/Dashbord" element={<Dashbord/>}></Route>  
        {/* <Route path="/Register" element={<Register/>}></Route> */}
        <Route path="/Index" element={<Index/>}></Route>
        <Route path="/Logout" element={<Logout/>}></Route>
        <Route path="/Side_bar" element={<Side_bar/>}></Route>
        <Route path="/Doctor_sidebar" element={<Doctor_sidebar/>}></Route>
        <Route path="/Header" element={<Header/>}></Route>
        <Route path="/Add_doctor" element={<Add_doctor/>}></Route>
        <Route path="/All_doctors" element={<All_doctors/>}></Route>
        <Route path="/Doctor_detail/:id" element={<Doctor_detail/>}></Route>
        <Route path="/Add_appoinment" element={<Add_appoinment/>}></Route>
        <Route path="/All_appoinment" element={<All_appoinment/>}></Route>
      </Routes>  
    </>
  );
}

export default App;
