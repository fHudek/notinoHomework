import React, { useEffect, useState } from 'react';
import { Todo } from '../components/Todo';
import { Todo as TodoType } from '../type/todo';

// rework this into regular api call, feel free to use any open api
const getTodos = (): Promise<TodoType[]> =>
    new Promise((res) => {
        setTimeout(() => {
            res([
                {
                    id: '1',
                    title: 'Go shopping',
                },
                {
                    id: '2',
                    title: 'Job interview',
                },
                {
                    id: '3',
                    title: 'Prepare homework',
                },
            ]);
        }, 100);
    });

export const TodosPage = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);

    useEffect(() => {
        (async () => {
            const awaitedTodos = await getTodos();
            setTodos(awaitedTodos);
        })();
    }, []);

    return (
        <div>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};
