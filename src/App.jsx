import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import FilterButtons from './FilterButtons';
import { signOut } from 'firebase/auth';
import { auth } from './utils/FireBase';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleAddTodo = useCallback(() => {
    const todosApp = [...todos, {
      todo,
      id: Date.now(),
      complete: false,
    }]
    setTodos([...todosApp]);
    setTodo("");
  }, [todo]);

  const handleOnToggleTodo = useCallback((id) => {
    const todosApp = [...todos]
    const todoInd = todosApp.findIndex((data) => data.id == id)
    todosApp[todoInd].completed = !todosApp[todoInd].completed
    setTodos([...todosApp]);
  },
    [todos]
  );

  const handleLogout = useCallback(() => {
    signOut(auth)
    try {

    } catch (err) {
      alert(err);
    };
  });

  const handleOnDelete = useCallback((id) => {
    const filter = todos.filter((data) => data.id !== id);
    setTodos([...filter])
  }, [todos]);

  const filteredTodos = useMemo(() =>
    todos.filter((data) => {
      if (filter == 'All') {
        return true;
      }
      if (filter == 'Completed' && data.completed) {
        return true;
      }
      if (filter == 'UnCompleted' && !data.completed) {
        return true;
      }
    }), [filter, todos])



  return (
    <div className=' container mx-auto'>
      <h1 className="font-bold text-3xl p-4 font-serif">Todo App</h1>

      <TodoInput
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onClick={handleAddTodo}
      />

      <FilterButtons filter={filter} setFilter={setFilter} />

      <TodoList
        toggleTodo={handleOnToggleTodo}
        todos={filteredTodos}
        onDelete={handleOnDelete}
      />
    </div>
  )
}

export default App;
