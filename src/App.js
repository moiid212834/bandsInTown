import React from 'react';
import logo from './logo-96.png';
import './App.css';

import {ThemeProvider, createTheme} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import {useSelector} from 'react-redux';
import {selectMode} from './features/theme/ThemeSlice';
import {Routes, Route} from 'react-router-dom';

import AppBar from './components/appbar';
import Footer from './components/footer';
import ErrorBoundary from './components/ErrorBoundary';

const EventsPage = React.lazy(() => import ('./pages/Events'));
const HomePage = React.lazy(() => import ('./pages/Home'));
const NotFoundPage = React.lazy(() => import ('./pages/NotFound'))

function App() {
    const mode = useSelector(selectMode);
    const darkTheme = createTheme({palette: {
            mode
        }});

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline></CssBaseline>
            <div className="App">
                <AppBar logo ={logo}/>
                <ErrorBoundary>
                    <React.Suspense>
                    <Routes>
                        <Route path="/events" element={< EventsPage />}></Route>
                        <Route path="/" element={< HomePage />}></Route>
                        <Route element={< NotFoundPage />}></Route>
                    </Routes>
                    </React.Suspense>
                </ErrorBoundary>
                <Footer/>
            </div>
        </ThemeProvider>
    );
}

export default App;
