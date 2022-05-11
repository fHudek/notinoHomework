import { ReactNode } from 'react';
import styled from 'styled-components';
import { Header } from './Header';

const Page = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 50rem;
    min-width: 20rem;
`;

type Props = {
    children: ReactNode;
};

export const PageContainer = ({ children }: Props) => {
    return (
        <Page>
            <Container>
                <Header />
                {children}
            </Container>
        </Page>
    );
};
