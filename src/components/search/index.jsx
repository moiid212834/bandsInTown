import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { selectAll } from '../../features/artists/ArtistSlice';
import { useSelector } from 'react-redux';

export default function ComboBox() {
  const allArtists = useSelector(selectAll);
    var names = allArtists.map((artist)=>{
        return artist.name;
    })
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={names}
      sx={{ width: '100%' }}
      renderInput={(params) => <TextField fullWidth margin='normal' {...params} label="Search Artist" />}
    />
  );
}