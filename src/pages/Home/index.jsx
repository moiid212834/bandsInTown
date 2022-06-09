import * as React from 'react';
import Search from '../../components/search';
import Suggestions from '../../components/artistSuggestions';
import RecentlyViewed from '../../components/viewedRecently';
import SearchResults from '../../components/searchResults';
import {Container} from '@mui/system';

export default function Home() {
    return (
        <Container className='AppContainer'>
            <Search></Search>
            <SearchResults></SearchResults>
            <RecentlyViewed></RecentlyViewed>
            <Suggestions></Suggestions>
        </Container>
    )
}