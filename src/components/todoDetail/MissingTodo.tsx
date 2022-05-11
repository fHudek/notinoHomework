import { Link } from 'react-router-dom';
import { ROUTES } from '../../Routes';
import { DescriptionWrrapper } from '../common/DescriptionWrapper';

type Props = {
    id?: string;
};

export const MissingTodo = ({ id }: Props) => {
    return (
        <DescriptionWrrapper>
            <h3>Todo {id && `with id ${id} `}was not found.</h3>
            <br />
            Please navigate to <Link to={ROUTES.HOME}>TODOs listing page</Link>, where you can look through your TODOs.
        </DescriptionWrrapper>
    );
};
