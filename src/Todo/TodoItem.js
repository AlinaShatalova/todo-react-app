import React from 'react'

export default function TodoItem(props) {
    const { todo } = props;
    return (
        <li>
            <strong className='todo-item-strong'>{todo.id + 1}</strong>
            {todo.name}
        </li>
    )
}