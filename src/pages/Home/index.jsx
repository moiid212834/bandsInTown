import Search from '../../components/search';
import Suggestions from '../../components/artistSuggestions';
import SearchResults from '../../components/search/SearchResults.jsx';
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