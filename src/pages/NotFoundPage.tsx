import { PageContainer } from '../components/common/PageContainer';
import { DescriptionWrrapper } from '../components/common/DescriptionWrapper';
import { Link } from 'react-router-dom';
import { ROUTES } from '../Routes';

export const NotFoundPage = () => {
    return (
        <PageContainer>
            <DescriptionWrrapper>
                Page was not found. Please navigate to <Link to={ROUTES.HOME}>home page</Link>.
            </DescriptionWrrapper>
        </PageContainer>
    );
};
