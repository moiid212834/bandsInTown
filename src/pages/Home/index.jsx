import * as React from 'react';
import Search from '../../components/search';
import Suggestions from '../../components/artistSuggestions';
import SearchResults from '../../components/search/SearchResults';
import {Container} from '@mui/system';

export default function Home() {
    return (
        <Container className='AppContainer'>
            <Search></Search>
            <SearchResults></SearchResults>
            <Suggestions></Suggestions>
        </Container>
    )
}