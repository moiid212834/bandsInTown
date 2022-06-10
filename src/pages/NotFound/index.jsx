import {Button, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import React from 'react';

//Not found page
//All urls except ./ and ./events/{artistname}
const Component = ({setPageTitle}) => {
  const navigate = useNavigate()
    return (
        <div
            style={{
            width: '100%',
            height: '83vh',
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Typography 
            variant='h1'
            fontWeight="bolder"
            >404 Error</Typography>
            <Typography>
            It seems that we can't find what you are looking for :(
            </Typography>
            <Button
            variant="outlined"
            onClick={()=>navigate('/')}
            sx={{my:2}}
            >
              Go back to Home
            </Button>
        </div>
    )
}

export default Component;
