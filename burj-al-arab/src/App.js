// import React, { createContext, useState } from 'react';
import './App.css';
import {
  // createBrowserRouter,
  // RouterProvider,
  Route,
  BrowserRouter,
  // Router,
  Routes,
  // Link,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login.js/Login';
import Book from './Components/Book/Book';
import NoMatch from './Components/NoMatch/NoMatch';
import Header from './Components/Header/Header';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='*' element= {<NoMatch/>} />
      <Route path='/' element= {<Home/>} />
      <Route path='/Home' element= {<Home/>} />
      <Route path='/Login' element= {<Login/>} />
      <Route path='/Book/:bedType' element={<Book/>}/>
    </Routes>
    </BrowserRouter>

   );
     
}

export default App;
