import { Loader } from '../components/common/ Loader';
import { PageContainer } from '../components/common/PageContainer';
import { Todo } from '../components/todoList/Todo';
import { useData } from '../providers/DataProvider';

export const TodosPage = () => {
    const { todos, isTodosLoading } = useData();

    return (
        <PageContainer>
            {!isTodosLoading ? todos.map((todo) => <Todo key={todo.id} todo={todo} />) : <Loader />}
        </PageContainer>
    );
};
