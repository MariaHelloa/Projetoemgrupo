import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useState } from "react";
import "./App.css";

import { Outlet } from "react-router-dom";

import  Header  from './components/layout/Header'
import  Cinema  from './components/imagens/cinema.jpg'
import { NovaTarefa } from "./components/NovaTarefa";
import { Tarefas } from "./components/Tarefas";

function App() {

  return (
    <div className='App'>
      <Header />

     
      <Outlet />
    </div>
  );
}


export default App;



