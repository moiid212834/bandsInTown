import React, {useEffect} from 'react';
import logo from './logo-96.png';
import './App.css';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import {selectMode} from './features/theme/ThemeSlice';
import {Routes, Route} from 'react-router-dom';
import AppBar from './components/appbar';
import Footer from './components/footer';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader'
import {rehydrateRecentlyViewed, rehydrateSearch} from './features/artists/ArtistSlice';
import {rehydrateMode} from './features/theme/ThemeSlice';

//Lazy loading to only render components when needed
const EventsPage = React.lazy(() => import ('./pages/Events'));
const HomePage = React.lazy(() => import ('./pages/Home'));
const NotFoundPage = React.lazy(() => import ('./pages/NotFound'))

function App() {
    const mode = useSelector(selectMode); // getting the current Theme Mode from the redux store
    const theme = createTheme({
        palette: {
            mode //setting theme
        }
    });

    const dispatch = useDispatch();

    //Calling rehydrating functions to restore the redux store from local storage
    useEffect(() => {
        dispatch(rehydrateRecentlyViewed());
        dispatch(rehydrateSearch());
        dispatch(rehydrateMode());
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline></CssBaseline>
            <div className="App">
                <AppBar logo ={logo}/>
                <ErrorBoundary>
                    <React.Suspense fallback={< Loader />}>
                        <Routes>
                            <Route path="/events/:id" element={< EventsPage />}></Route>
                            <Route path="/" element={< HomePage />}></Route>
                            <Route path="*" element={< NotFoundPage />}></Route>
                        </Routes>
                    </React.Suspense>
                </ErrorBoundary>
                <Footer/>
            </div>
        </ThemeProvider>
    );
}

export default App;
