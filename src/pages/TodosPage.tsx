import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTodos } from '../api/todo';
import { Loader } from '../components/ Loader';
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

export const TodosPage = () => {
    const [todos, setTodos] = useState<TodoType[] | null>(null);

    useEffect(() => {
        (async () => {
            const awaitedTodos = await getTodos();
            if (awaitedTodos) setTodos(awaitedTodos);
        })();
    }, []);

    return (
        <PageContainer>
            <Title>Homework TODO list</Title>
            {todos ? todos.map((todo) => <Todo key={todo.id} todo={todo} />) : <Loader />}
        </PageContainer>
    );
};
