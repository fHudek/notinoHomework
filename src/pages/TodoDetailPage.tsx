import { useParams } from 'react-router-dom';
import { PageContainer } from '../components/common/PageContainer';
import { useTodo } from '../providers/DataProvider';
import { TodoDetail } from '../components/todoDetail/TodoDetail';
import { MissingTodo } from '../components/todoDetail/MissingTodo';
import { Loader } from '../components/common/ Loader';

export const TodoDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const { isLoading, todo } = useTodo(id);

    return (
        <PageContainer>
            {isLoading ? <Loader /> : todo ? <TodoDetail todo={todo} /> : <MissingTodo id={id} />}
        </PageContainer>
    );
};
