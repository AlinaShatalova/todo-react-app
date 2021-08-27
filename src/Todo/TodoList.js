import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
    const todos = props.todos;
    return (
        <ul className='todo-list-ul'>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo}/>
            ) }
        </ul>
    )
}