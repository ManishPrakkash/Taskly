export const AddTask = ({tasklist,setTasklist,task,setTask}) => {

  const handleSubmit =(e)=>{
    e.preventDefault();

    if(task.id){
      const date = new Date();
      const updatedTasklist=tasklist.map((todo)=>(
        todo.id === task.id ? 
        {id:task.id, name:e.target.task.value,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
      ));
      setTasklist(updatedTasklist);
      setTask([]);
    }
    else{
       const date = new Date();
    const newTask = {
      id:date.getTime(),
      name:task.name,
      time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
    setTasklist([...tasklist,newTask]);
    e.target.task.value ="";
    }
  }
  
  return (
  <section className="addTask">
    <form onSubmit={handleSubmit}>
        <input value={task.name} type="text" name="task" autoComplete="off" placeholder="add task" maxLength={25} onChange={e => setTask({...task,name:e.target.value})}/>
        <button type="submit">Add</button>
    </form>
  </section>
  )
}
