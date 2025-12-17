import { useState } from 'react'
import './App.css'
import { addTask, deleteTask, getAllTask } from './services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';


function App() {
  const [input,setInput] = useState({title:""})
  const [tasks,setTasks] = useState([])
  // console.log(input);
  useEffect(()=>{
    handleGetAllTask()
  },[])


  // add task
  const handleAddTask = async()=>{
    try{
      const result = await addTask(input)
    console.log(result);
    if (result.status==200) {
      toast.success("Task added Successfully")
      setInput({title:""})
      handleGetAllTask()
    }
    else if(result.status==400){
      toast.warning(result.response.data)
    }
    }catch(err){
      console.log(err);
      toast.error("Something went wrong")
    }

  }

  // get all task
  const handleGetAllTask = async ()=>{
    try{
      const result = await getAllTask()
      console.log(result);
    if (result.status == 200) {
      setTasks(result.data)
    }
    else{
      toast.error("Failed to Fetch Tasks")
    }
    }catch(err){
      console.log(err);
      toast.error("Something went wrong ")
    }
  }

  // delete task
  const handleDeleteTask = async(id)=>{
    try{
      const result = await deleteTask(id)
      if (result.status == 200) {
        toast.success("Task Deleted")
        handleGetAllTask()
      }
      else{
        toast.error("Delete Failed")
      }
    }catch(err){
      console.log(err);
      toast.error("Something went wrong")
    }
  }

  return (
    <>
      <div className='m-10 p-5 rounded-xl shadow-md bg-white'>
        <div className='text-center mt-5'>
          <h1 className='text-5xl'>TASK MANAGER</h1>
        </div>

        <div className='flex items-center justify-center gap-2'>
          <input value={input.title} onChange={e=>setInput({...input,title:e.target.value})} className='border-2 my-2 rounded w-2xl p-2 text-center border-gray-400' type="text" />
          <button onClick={handleAddTask} className='p-2 bg-green-700 text-white rounded cursor-pointer'>ADD TASK</button>
        </div>
         
          <div className='mt-6 mx-20'>
          <ul>
            {
              tasks?.length !=0?
              tasks?.map(task=>(
                <li key={task._id} className='flex items-center justify-between border-white rounded bg-gray-400 p-4 my-4'>
              <span className='text-white text-xl'>{task.title}</span>
              <button onClick={()=>handleDeleteTask(task._id)} className='p-2 bg-red-700 text-white rounded cursor-pointer'>DELETE</button>
            </li>
              ))
            :
            <p className='text-center text-gray-500'>No Tasks Available</p>
            }
          </ul>
         </div>

         {/* toast */}
         <ToastContainer
                position="top-center"
                autoClose={2000}
                theme="dark"
         />
      </div>
    </>
  )
}

export default App
