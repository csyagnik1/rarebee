
import './App.css';
import '../src/MobileApp.css'
import {Route, Routes} from "react-router-dom";
import Header from './components/Header';
import  Main  from './components/Main.js';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
        <Route path='/' element={<Main />}/>

         
   
        </Routes>
      
    </div>
  );
}

export default App;
