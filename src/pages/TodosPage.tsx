import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PageContainer } from '../components/PageContainer';
import { Todo } from '../components/Todo';
import { Todo as TodoType } from '../type/todo';

const Title = styled.h1`
    background-color: ${({ theme }) => theme.backgroundDark};
    padding: 1rem;
    margin: 0;
    height: 4rem;
    display: flex;
    align-items: center;
`;

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
        <PageContainer>
            <Title>Homework TODO list</Title>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </PageContainer>
    );
};
