export const ShowTask = () => {
const tasks =[{id:10001,name:"Task A",time: "2:10:00 AM 9/14/2030"},
              {id:10002,name:"Task B",time: "6:07:33 AM 10/14/2030"},
              {id:10003,name:"Task C",time: "4:45:21 AM 11/14/2030"}
]

  return (
    <section className="showTask">
        <div className="head">
            <div> 
               <span className="title">Todo</span>
                <span className="count">0</span>
            </div>
            <button className="clearAll">Clear All</button>
        </div>
        <ul>
            { tasks.map((task)=>(
                 <li>
                <p>
                    <span className="name">{task.name}</span>
                    <span className="time">{task.time}</span>
                </p>
                <i className="bi bi-pencil-square"></i>
                <i className="bi bi-trash"></i>
            </li>
        ))}
           
        </ul>
    </section>
  )
}
