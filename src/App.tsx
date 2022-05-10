import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { TodosPage } from './pages/TodosPage';

const theme = {
    backgroundDark: 'teal',
    backgroundLight: '#ADD8E6',
    backgroundLightHover: 'lightgrey',
    border: 'black',
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <TodosPage />
        </ThemeProvider>
    );
}

export default App;
