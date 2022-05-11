import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { DataProvider } from './providers/DataProvider';
import { Routes } from './Routes';

const theme = {
    backgroundDark: 'teal',
    backgroundLight: 'white',
    backgroundLightHover: 'lightgrey',
    border: 'black',
    textDark: 'black',
};

const App = () => {
    return (
        <Router>
            <DataProvider>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Routes />
                </ThemeProvider>
            </DataProvider>
        </Router>
    );
};

export default App;
