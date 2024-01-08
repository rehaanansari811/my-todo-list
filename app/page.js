"use client"
import React, { useState } from 'react'

const page = () => {

  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    console.log(desc);
    setmainTask([...mainTask, { task, desc }])
    settask("")
    setdesc("")
    console.log(mainTask);
  }

  const deleteTask = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setmainTask(copyTask)
  }
  let renderTask = <h1 className='text-center py-2'>No task available</h1>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <div className='flex justify-between items-center mb-1 mt-1'>
          <h3>{t.task}</h3>
          <h4>{t.desc}</h4>
          <div className="btn">
            <button className='py-2 px-4 bg-red-400 hover:bg-red-500 rounded-md' onClick={() => { deleteTask(i) }}>Delete</button>
          </div>
        </div>
      )
    })
  }


  return (
    <>
      <div className="main w-full h-screen bg-orange-200 flex flex-col items-center">
        <header className='text-center text-violet-950 py-4'><h1 className='text-4xl'>My Todo App 🚀</h1></header>
        <div className="todo-app w-[90%] h-[85%] rounded-xl bg-slate-100">
          <form className='flex gap-3 flex-col justify-between items-center px-3 py-3' onSubmit={handleSubmit}>
            <div className=' flex gap-3 justify-between w-[100%]'>
              <input className='px-4 py-2 rounded-md border-2 w-[50%] border-violet-900' type="text" name="task" placeholder='Enter your task' value={task} onChange={(e) => { settask(e.target.value) }} />
              <input className='px-4 py-2 rounded-md border-2 w-[50%] border-violet-900' type="text" name="desc" placeholder='Enter your task details' value={desc} onChange={(e) => { setdesc(e.target.value) }} />
            </div>
            <button className='bg-violet-950 text-white px-0 py-2 rounded-md w-[20%]'>Add</button>
          </form>
          <div className="my-taskBox px-3 py-3">
            <h1 className='text-black text-center font-semibold text-xl mb-4'>My task list</h1>
            <div className="taskbox bg-slate-300 p-3 rounded-md">
              {renderTask}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default page