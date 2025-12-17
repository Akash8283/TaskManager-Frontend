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
    // console.log(result);
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
      // console.log(result);
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
      <div className='m-4 sm:m-10 p-4 sm:p-5 rounded-xl shadow-md bg-white'>
        <div className='text-center mt-5'>
          <h1 className='text-3xl sm:text-5xl'>TASK MANAGER</h1>
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-2 mt-4'>
          <input value={input.title} onChange={e=>setInput({...input,title:e.target.value})} className='border-2 rounded w-full sm:w-96 p-2 text-center border-gray-400' type="text" />
          <button onClick={handleAddTask} className='w-full sm:w-auto p-2 bg-green-700 text-white rounded cursor-pointer'>ADD TASK</button>
        </div>
         
          <div className='mt-6 mx-2 sm:mx-20'>
          <ul>
            {
              tasks?.length !=0?
              tasks?.map(task=>(
                <li key={task._id} className='flex flex-col sm:flex-row items-start sm:items-center justify-between border-white rounded bg-gray-400 p-4 my-4 gap-2'>
              <span className='text-white text-base sm:text-xl'>{task.title}</span>
              <button onClick={()=>handleDeleteTask(task._id)} className='p-2 bg-red-700 text-white rounded text-sm sm:text-base cursor-pointer'>DELETE</button>
            </li>
              ))
            :
            <p className='text-center text-gray-400'>No Tasks Available</p>
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
