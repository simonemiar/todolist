import {useState} from "react"
import ListItem from "./components/Listitem"
import './App.css';

export default function App(){
  const[tasks, setTasks] = useState([
    {id:1, task: "Clean stuff", completed: false,},
    {id:2, task: "Pick up the kids", completed: true,},
  ]);
  const [showCompleted, setShowCompleted] = useState(true);
  function deleteitem(id){
    setTasks((oldState) => oldState.filter((item) => item.id !== id))
  }
  function toggleCompletion(id){
    setTasks((oldState) => {
      return oldState.map((item) =>{
        if(id === item.id){
          const newItem = { ...item};
          newItem.completed= !newItem.completed
          return newItem
        }
        return item
  
      })
    })

  }
  let all = tasks;
  if(showCompleted){
    all = tasks.filter(item=>item.completed===false)
  } else {

  }
  function submit(e){
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      task: e.target.elements.name.value,
      completed: false,
    }
    setTasks((oldState) => oldState.concat(newTask))
  }
  return (
    <div id="App">
      <section>
      <fieldset>
      <legend>DAILY TODO LIST</legend>
      <form onSubmit={submit}>
        {/* <label htmlFor="name">Add a task below:</label> */}
        <input required type="text" id="name" name="task"/>
        <button>Add Task</button>
        <button className="old_tasks" onClick={() => {setShowCompleted(oldState=> !oldState);
      }}
      >see completed tasks
      </button>
      </form>
      </fieldset>
      <fieldset>
      <legend>INCOMPLETED TASKS</legend>
      
      <ul>
        {all.map((task) => (
        <ListItem key={task.id} toggleCompletion={toggleCompletion} deleteitem={deleteitem} {...task}/>
        ))}
      </ul>
      </fieldset>
      </section>
    </div>
  )
};
