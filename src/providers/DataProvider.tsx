import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getTodos as getTodosTransport } from '../api/todo';
import { Todo } from '../type/todo';

type Data =
    | {
          isTodosLoading: false;
          todos: Todo[];
      }
    | {
          isTodosLoading: true;
          todos: null;
      };

const defaultValue: Data = {
    isTodosLoading: false,
    todos: [],
};

const DataContext = createContext<Data>(defaultValue);

export const useData = () => {
    const context = useContext(DataContext);
    return context;
};

export const useTodo = (id?: string) => {
    const { todos, isTodosLoading } = useData();
    const todo = id && !isTodosLoading ? todos.find((todo) => todo.id === id) : undefined;
    return { isLoading: isTodosLoading, todo: todo || null };
};

type Props = {
    children: ReactNode;
};

export const DataProvider = ({ children }: Props) => {
    const [data, setData] = useState<Data>(defaultValue);
    useEffect(() => {
        const getTodos = async () => {
            setData((data) => ({ ...data, todos: null, isTodosLoading: true }));
            const awaitedTodos = await getTodosTransport();
            if (awaitedTodos) setData((data) => ({ ...data, todos: awaitedTodos, isTodosLoading: false }));
        };
        getTodos();
    }, []);
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
