import { useState } from "react";

function TodoList({ todos, onDelete, toggleTodo }) {
  const [tasks, setTasks] = useState([])
  const [newtask, setNewtask] = useState("")

  function Taskup(index) {
    if (index > 0) {
      const newtasks = [...tasks]
      const temp = newtasks[index]
      newtasks[index] = newtasks[index - 1]
      newtasks[index - 1] = temp
      setTasks(newtasks)
    }
  }
  function Taskdown(index) {
    if (index < tasks.length - 1) {
      const newtasks = [...tasks]
      const temp = newtasks[index]
      newtasks[index] = newtasks[index + 1]
      newtasks[index + 1] = temp
      setTasks(newtasks)
    }
  }

  return (
    <>
      {
        todos.map((todo, index) => {
          return (
            <div key={todo.id} className='flex my-2 bg-slate-100'>
              <h3
                onClick={() => toggleTodo(todo.id)}
                style={{ textDecoration: todo.completed && "line-through" }}
                className='text-2xl cursor-pointer text-left py-2 pl-2 font-serif font-medium flex-1'>
                {todo.todo}
              </h3>

              <button
                onClick={() => onDelete(todo.id)}
                className='bg-red-400 rounded-sm p-2 font-serif px-4'>
                Delete
              </button>

              <button className="taskup" onClick={() => Taskup(index)}>👆</button>

              <button className="taskdown" onClick={() => Taskdown(index)}>👇</button>
              
            </div>
          )
        })
      }
    </>
  )
}

export default TodoList