import './App.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';
import { useEffect, useState } from "react";


function App() {

  const [tasklist, setTasklist] = useState(() => {
    try {
      const savedTasklist = localStorage.getItem("tasklist");
      return savedTasklist ? JSON.parse(savedTasklist) : [];
    } 
    catch (error) {
      console.error("Failed to parse tasklist from localStorage", error);
      return [];
    }
  });

  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]); 

 return (
  <div className="app">
    <Header />
    <AddTask 
    tasklist={tasklist} 
    setTasklist={setTasklist}
    task={task}
    setTask={setTask}
  />
    <ShowTask 
    tasklist={tasklist} 
    setTasklist={setTasklist}
    task={task}
    setTask={setTask}/>
  </div>
 );
}

export default App;
  