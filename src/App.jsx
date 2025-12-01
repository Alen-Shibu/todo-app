import { useState } from "react";
import { CircleX } from 'lucide-react';


const App = () => {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

 function addtasks(){
  const copyTasks = [...tasks];
  copyTasks.push({task});
  setTasks(copyTasks)
  console.log(copyTasks)
 }

    const onFormSubmit = (e) =>{
    e.preventDefault();
    addtasks();
    setTask('')
  }

  const deleteTask = (idx) =>{
    const copyTasks = [...tasks]
    copyTasks.splice(idx,1);
    setTasks(copyTasks)
  }


  return (
    <div className="h-screen bg-linear-to-br from-gray-900 to-gray-800">
    <div className="w-full bg-gray-800/50 backdrop-blur-sm flex flex-col items-center py-12 px-5">
      <h1 className="text-4xl font-bold mb-7 text-white">To-do List App</h1>
      <div className=" lg:w-1/2 w-full flex items-center overflow-hidden h-13 rounded-2xl">
        <textarea placeholder="add your tasks here" className=" text-white placeholder-gray-400 text-md resize-none outline-none text-left pl-5 pt-3 w-4/5 max-h-full bg-gray-700 border-2 border-gray-600 " value={task} onChange={(e)=>{
          setTask(e.target.value)
        }} onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onFormSubmit(e);
          }
        }}></textarea>
        <button onClick={onFormSubmit} className="text-lg font-semibold text-white outline-none bg-rose-600 hover:bg-rose-700




 w-1/5 h-full ">Add</button>
      </div>
      
      
      <div className="flex flex-col gap-6 w-full items-center mt-10">
        {tasks.map((elem,idx)=>{
          if(elem.task)
          return <div className="lg:w-1/2 w-full min-h-15 relative" key={idx} ><textarea value={elem.task} readOnly className="pr-12 resize-none h-full w-full bg-gray-700/50 border-2 border-gray-600 rounded-3xl text-white px-4 py-4">
      </textarea> 
      <div className="absolute right-7 bottom-8 text-rose-400 hover:text-rose-300" onClick={()=>{
        deleteTask(idx)
      }}><CircleX size={30} /></div>
      </div>
        })}
      </div>
    </div>
    </div>
  )
}

export default App