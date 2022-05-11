import { useParams } from 'react-router-dom';
import { PageContainer } from '../components/PageContainer';
import { useTodo } from '../providers/DataProvider';
import { TodoDetail } from '../components/TodoDetail';
import { MissingTodo } from '../components/MissingTodo';
import { Loader } from '../components/ Loader';

export const TodoDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const { isLoading, todo } = useTodo(id);

    return (
        <PageContainer>
            {isLoading ? <Loader /> : todo ? <TodoDetail todo={todo} /> : <MissingTodo id={id} />}
        </PageContainer>
    );
};
