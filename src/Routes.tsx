import { Route, Routes as ReactRoutes } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { TodoDetailPage } from './pages/TodoDetailPage';
import { TodosPage } from './pages/TodosPage';

export const ROUTES = {
    HOME: '/',
    TODO_DETAIL: '/todo/:id',
};

export const Routes = () => {
    return (
        <ReactRoutes>
            <Route path={ROUTES.HOME} element={<TodosPage />} />
            <Route path={ROUTES.TODO_DETAIL} element={<TodoDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </ReactRoutes>
    );
};
