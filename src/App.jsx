/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom';
function App() {
// THese is create by react    these is wrong 
  //console.log(process.env.REACT_APP_APPERITE_URL);
//console.log(import.meta.env.VITE_APPERITE_URL);

const [loading,setLoading]= useState(true);
const dispatch = useDispatch(true);

useEffect (()=>{

  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login({userData}))
    }else{
      dispatch(logout())
    }
  })
  .finally(()=> setLoading(false))

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

return !loading  ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  </div>
) : null



  
}

export default App
