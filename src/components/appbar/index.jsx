import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {ThemeSelector} from '../../features/theme/Theme';


export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <div style={{marginRight: 'auto', display:'flex', alignItems:'center',}}>
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
