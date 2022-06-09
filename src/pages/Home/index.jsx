import Search from '../../components/search';
import Suggestions from '../../components/artistSuggestions';
import SearchResults from '../../components/search/SearchResults';
import {Container} from '@mui/system';
import {useEffect} from 'react';

export default function Home() {
    return (
        <Container className='AppContainer'>
            <Search></Search>
            <SearchResults></SearchResults>
            <Suggestions></Suggestions>
        </Container>
    )
}