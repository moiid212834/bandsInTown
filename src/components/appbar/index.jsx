import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {ThemeSelector} from '../Theme';
import {useNavigate} from 'react-router-dom';

/**
 * Appbarr component
 * Same Appbar navigation bar is used throughout the app
 * <ThemeSelector> is embeded within the app bar
 */
export default function ButtonAppBar(props) {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <div style={{marginRight: 'auto', display:'flex', alignItems:'center',}} onClick={()=>navigate('/')}>
                <img src={props.logo} alt="logo" width={40} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft:2 }}>
                    Bands in Town
                </Typography>   
            </div>
            <ThemeSelector></ThemeSelector>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
