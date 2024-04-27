// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'

function App() {
// THese is create by react    these is wrong 
  //console.log(process.env.REACT_APP_APPERITE_URL);
console.log(import.meta.env.VITE_APPERITE_URL);


  return (
    <>
<h1>a Blog With Appwrite</h1>
    </>
  )
}

export default App
