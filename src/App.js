import React from 'react';
import logo from './logo-96.png';
import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Container } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';
import { selectMode } from './features/theme/ThemeSlice';
import { useEffect } from 'react';
 
import AppBar from './components/appbar';
import Search from './components/search';
import Suggestions from './components/artistSuggestions';
import SearchResults from './components/search/searchResults';
import Footer from './components/footer';

function App() {
  const mode = useSelector(selectMode);
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
      <div className="App">
        <AppBar logo ={logo}></AppBar>
        <Container className='AppContainer'>
          {/* <img src={logo} className="landingImage" alt="logo"></img> */}
          <Search></Search>
          <SearchResults></SearchResults>
          <Suggestions></Suggestions>          
        </Container>
        <Footer></Footer>      
      </div>
    </ThemeProvider>
  );
}

export default App;
