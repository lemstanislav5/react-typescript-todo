import React, {useState, useEffect} from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './interfaces';


const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  useEffect(()=> {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  },[])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      title: title, 
      id: Date.now(), 
      completed: false
    }
    setTodos(prev => [...prev, newTodo])
  }

  const toggleHandler = (id: number, val: boolean) => {
    setTodos(prev => [...prev.map(todo => {
      if(todo.id === id) todo.completed = val
      return todo;
    })])
  }
  const deleteTodo = (id: number) => {
    const shoudRemove = window.confirm('Вы уверены, что хотите удалить элемент?')
    if(shoudRemove) setTodos(prev => [...prev.filter(todo => todo.id !== id)])
  }
  return (
    <>
      <Navbar/>
      <div className='container'> 
        <TodoForm onAdd={addTodo}/>
        <TodoList todos={todos} toggleHandler={toggleHandler} deleteTodo={deleteTodo}/>
      </div>
    </>
  );
}

export default App;
