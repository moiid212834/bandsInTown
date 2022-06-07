import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Skeleton, Typography } from '@mui/material';
import { Grid } from '@mui/material';

export default function SearchResults() {
  return (
    <div>
      <Typography sx={{mt:2,mb:1}}> 3 results for "Jal"</Typography>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          mb: 4,
          width: "100%",
          p:2
        },
      }}
    >
      <Paper elevation={3}>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={3} md={3}>
          <div style={{textAlign:'center'}}>
            <Skeleton variant="circular" width={180} height={180} style={{margin:'20px auto'}} />
            <Skeleton variant="text" width={'100%'}/>
          </div>
        </Grid>
        <Grid item xs={2} sm={3} md={3}>
          <div style={{textAlign:'center'}}>
            <Skeleton variant="circular" width={180} height={180} style={{margin:'20px auto'}} />
            <Skeleton variant="text" width={'100%'}/>
          </div>
        </Grid>
        <Grid item xs={2} sm={3} md={3}>
          <div style={{textAlign:'center'}}>
            <Skeleton variant="circular" width={180} height={180} style={{margin:'20px auto'}} />
            <Skeleton variant="text" width={'100%'}/>
          </div>
        </Grid>
        <Grid item xs={2} sm={3} md={3}>
          <div style={{textAlign:'center'}}>
            <Skeleton variant="circular" width={180} height={180} style={{margin:'20px auto'}} />
            <Skeleton variant="text" width={'100%'}/>
          </div>
        </Grid>
      </Grid>
      
      </Paper>
    </Box>
    </div>
  );
}