import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleMode,
  selectMode
} from './ThemeSlice';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export function ThemeSelector() {
  const mode = useSelector(selectMode);
  const dispatch = useDispatch();
  
  return (
    <Box>
      <IconButton 
        sx={{ ml: 1 }}
        color="inherit"
        onClick={()=>dispatch(toggleMode())}  
      >
        { mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Box>
  );
}
