import { render, screen } from '@testing-library/react';
import { Header } from '../Header';
import { BrowserRouter } from 'react-router-dom';
import { ROUTES } from '../../../Routes';
import logo from '../../svg/logo.svg';

test('render header', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
    const headerWrapper = screen.getByTestId('header-wrapper');
    expect(headerWrapper).toBeInTheDocument();
    const text = screen.getByText('Homework TODO App');
    expect(text).toBeInTheDocument();
    const headerLink = screen.getByTestId('header-link');
    expect(headerLink).toBeInTheDocument();
    expect(headerLink).toHaveAttribute('href', ROUTES.HOME);
    const headerLogo = screen.getByTestId('header-logo');
    expect(headerLogo).toBeInTheDocument();
    expect(headerLogo).toHaveAttribute('src', logo);
});
