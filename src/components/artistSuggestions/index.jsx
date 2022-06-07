import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectAll,selectArtistStatus,selectArtistError,getArtists } from '../../features/artists/ArtistSlice';

import { experimentalStyled as styled} from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#f1f1f1',
    ...theme.typography.body2,
    padding: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function MultiActionAreaCard() {
  const dispatch = useDispatch();

  const suggestions = useSelector(selectAll);
  const artistStatus = useSelector(selectArtistStatus);
  const artisError = useSelector(selectArtistError);
  
  useEffect(()=>{
    if(artistStatus==='idle'){
        dispatch(getArtists());
    }
  });

  return (
    <Box>
        <Typography variant="h4" marginBottom={2}>Suggested Artists</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {suggestions.slice(0,4).map(element =>(
            <Grid item xs={2} sm={3} md={3}>
                <Item> 
                    <CardActionArea style={{textAlign:'center'}}>
                        <CardMedia
                            component="img"
                            image={element.image_url}
                            alt="green iguana"
                            style={{margin:'0 auto', padding:'20px',borderRadius:'50%', objectFit:'cover', height:'180px',width:'180px'}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {element.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <FacebookIcon 
                            className={'clickableIcon'}
                            onClick = {()=> {window.location.href= element.facebook_page_url}}
                        ></FacebookIcon>
                    </CardActions>
                </Item>    
            </Grid>))} 
        </Grid>
    </Box>
    );
}
