import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {toggleMode, selectMode} from '../features/theme/ThemeSlice';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

/**
 * Theme selecting button at the top right of the app (right end of the appbar)
 * -Clicks to toggle mode
 * -Theme mode stored in the redux store
 * -Mode updated through the toggleMode action
 */ 
export function ThemeSelector() {
    const mode = useSelector(selectMode);
    const dispatch = useDispatch();

    return (
        <Box>
            <IconButton
                sx={{
                ml: 1
            }}
                color="inherit"
                onClick={() => dispatch(toggleMode())}>
                {mode === 'dark'
                    ? <Brightness4Icon/>
                    : <Brightness7Icon/>}
            </IconButton>
        </Box>
    );
}
