import React from 'react';
import styled from 'styled-components';
import { Todo as TodoType } from '../type/todo';

const TodoWrapper = styled.div`
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
export class Todo extends React.PureComponent<Props> {
    handleOnClick() {
        window.location.href = '/detail';
    }

    render() {
        return (
            <TodoWrapper>
                <div onClick={this.handleOnClick}>{this.props.todo.title}</div>
            </TodoWrapper>
        );
    }
}
