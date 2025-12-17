import './App.css'

function App() {

  return (
    <>
      <div className='m-10 p-5 rounded-xl shadow-md bg-white'>
        <div className='text-center mt-5'>
          <h1 className='text-5xl'>TASK MANAGER</h1>
        </div>

        <div className='flex items-center justify-center gap-2'>
          <input className='border-2 my-2 rounded w-2xl p-2 text-center border-gray-400' type="text" />
          <button className='p-2 bg-green-700 text-white rounded cursor-pointer'>ADD TASK</button>
        </div>
         
         <div className='mt-6 mx-20'>
          <ul>
            <li className='flex items-center justify-between border-white rounded bg-gray-400 p-4 my-4'>
              <span className='text-white text-xl'>Books Added successfully</span>
              <button className='p-2 bg-red-700 text-white rounded cursor-pointer'>DELETE</button>
            </li>
            
          </ul>
         </div>
      </div>
    </>
  )
}

export default App
