import { ROUTES } from '../Routes';
import { Todo } from '../type/todo';
import { BackLink } from './BackLink';
import { DescriptionWrrapper } from './DescriptionWrapper';

type Props = {
    todo: Todo;
};

export const TodoDetail = ({ todo }: Props) => {
    return (
        <DescriptionWrrapper>
            <BackLink to={ROUTES.HOME}>back</BackLink>
            <h3>{todo.title}</h3>
            {todo.description}
        </DescriptionWrrapper>
    );
};
