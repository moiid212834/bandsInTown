import * as React from 'react';
import TextField from '@mui/material/TextField';
import {searchArtist, getArtist, selectSearchTerm} from '../../features/artists/ArtistSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react'

export default function ComboBox() {
    const dispatch = useDispatch();
    const lastSearchTerm=useSelector(selectSearchTerm);
    const [searchTerm,
        setSearchTerm] = useState('');

    const handleEnter = (event) =>{
      if (event.key === 'Enter') {
        dispatch(searchArtist(searchTerm));
        dispatch(getArtist(searchTerm));
      }
    }

    React.useEffect(()=>{
      if(lastSearchTerm){
        setSearchTerm(lastSearchTerm);
        dispatch(getArtist(lastSearchTerm));
        }
      },[])
        
    return (
    <TextField
        id="outlined-basic"
        label="Search Artist"
        variant="outlined"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onKeyDown={handleEnter}
        sx={{width:'100%',my:3}}
      /> 
    );
}