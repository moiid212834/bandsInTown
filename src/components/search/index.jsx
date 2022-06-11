import * as React from 'react';
import TextField from '@mui/material/TextField';
import {searchArtist, getArtist, selectSearchTerm} from '../../features/artists/ArtistSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react'

/**
 * Searchbar on home page
 */
export default function Search() {
    const dispatch = useDispatch();
    const lastSearchTerm = useSelector(selectSearchTerm);
    const [searchTerm,
        setSearchTerm] = useState('');
    const [helperText,setHelperText]=useState("");

    /**
     * Handles 'Enter' key press after search result is typed.
     */
    const handleEnter = (event) => {
        if (event.key === 'Enter') {
          if(searchTerm!==""){
            setHelperText("");
            dispatch(searchArtist(searchTerm));
            dispatch(getArtist(searchTerm));
          }else{
            setHelperText("You need to type something");
          }
        }
    }

    /**
     * Checks if a searched term was present before page reload and restores the search term and search results
     */
    React.useEffect(() => {
        if (lastSearchTerm) {
            setSearchTerm(lastSearchTerm);
            dispatch(getArtist(lastSearchTerm));
        }
    }, [])

    return (<TextField
        id="outlined-basic"
        label="Search Artist"
        variant="outlined"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onKeyDown={handleEnter}
        helperText={helperText}
        sx={{
        width: '100%',
        my: 3
    }}/>);
}