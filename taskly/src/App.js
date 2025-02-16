import './App.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';
import { useState } from "react";
function App() {
  const [tasklist, setTasklist]= useState([]);
  
 return (
  <div className="app">
    <Header />
    <AddTask tasklist={tasklist} setTasklist={setTasklist}/>
    <ShowTask tasklist={tasklist} setTasklist={setTasklist}/>
  </div>
 );
}

export default App;
  