import { Loader } from '../components/ Loader';
import { PageContainer } from '../components/PageContainer';
import { Todo } from '../components/Todo';
import { useData } from '../providers/DataProvider';

export const TodosPage = () => {
    const { todos, isTodosLoading } = useData();

    return (
        <PageContainer>
            {!isTodosLoading ? todos.map((todo) => <Todo key={todo.id} todo={todo} />) : <Loader />}
        </PageContainer>
    );
};
