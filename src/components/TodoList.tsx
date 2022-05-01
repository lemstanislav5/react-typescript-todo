import React from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
  todos: ITodo[]
  toggleHandler(id: number, val: boolean): void
  deleteTodo(id: number): void
}

export const TodoList: React.FunctionComponent<TodoListProps> = ({ todos, toggleHandler, deleteTodo }) => {
const removeHandler = (event: React.MouseEvent, id: number) => {
  event.preventDefault()
  deleteTodo(id)
}

  return(
    <ul>
      {todos.length === 0
        ? 'Пока нет дел!'
        : todos.map(todo => {
          return <li className={todo.completed? 'todo completed' : 'todo' } key={todo.id}>
            <label>
              <input 
                type='checkbox' 
                checked={todo.completed}
                onChange={() => {}}
                onClick={() => toggleHandler(todo.id, !todo.completed)}/>
              <span>{todo.title}</span>
              <i className='material-icons red-text' onClick={event => removeHandler(event, todo.id)}>delete</i>
            </label>
          </li>
        })}
      
    </ul>
  )
}
