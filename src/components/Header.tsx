import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ROUTES } from '../Routes';
import logo from '../svg/logo.svg';

const HeaderLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.textDark};
    font-size: 2rem;
`;

const HeaderWrapper = styled.h1`
    background-color: ${({ theme }) => theme.backgroundDark};
    padding: 1rem 0;
    margin: 0;
    height: 4rem;
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    width: 8rem;
    height: 8rem;
`;

export const Header = () => {
    return (
        <HeaderWrapper data-testid="header-wrapper">
            <HeaderLink data-testid="header-link" to={ROUTES.HOME}>
                <Logo src={logo} data-testid="header-logo" />
            </HeaderLink>
            Homework TODO App
        </HeaderWrapper>
    );
};
