import React from 'react';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import {ThemeProvider} from '@mui/material/styles';

export default function LinearIndeterminate() {
    return (
        
           <div style={{
               display:'flex',
               height:'90vh',
               width:'90vw',
               alignItems:'center',
               justifyContent: 'center',
                margin:'0 auto'
           }} >
                <CircularProgress></CircularProgress>
            </div>
    );
}