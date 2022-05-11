import { memo } from 'react';
import { generatePath, Link } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from '../Routes';
import { Todo as TodoType } from '../type/todo';

const TodoWrapper = styled(Link)`
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.textDark};
    padding: 1rem;
    background-color: ${({ theme }) => theme.backgroundLight};
    border: 1px solid ${({ theme }) => theme.border};
    border-bottom: 0;
    &:hover {
        background-color: ${({ theme }) => theme.backgroundLightHover};
    }
    :last-child {
        border-bottom: 1px solid ${({ theme }) => theme.border};
    }
`;

type Props = {
    todo: TodoType;
};
export const Todo = memo(({ todo }: Props) => {
    return (
        <TodoWrapper to={generatePath(ROUTES.TODO_DETAIL, { id: todo.id })}>
            <div>{todo.title}</div>
        </TodoWrapper>
    );
});
