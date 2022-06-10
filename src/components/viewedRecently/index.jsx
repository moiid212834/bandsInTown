import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {useSelector} from 'react-redux';
import {selectRecentlyViewed} from '../../features/artists/ArtistSlice';
import {useNavigate} from 'react-router-dom';
import {experimentalStyled as styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ScrollContainer from 'react-indiana-drag-scroll';

//Styling single card for recently viewed
const Item = styled(Card)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark'
        ? '#121212'
        : '#f1f1f1',
    ...theme.typography.body2,
    padding: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '230px',
    display:'flex',
    flexDirection:'column',
    height:'100%'
}));

export default function ViewedRecently() {
    const recentlyViewed = useSelector(selectRecentlyViewed); //getting recently viewed list from redux store
    const navigate = useNavigate();

    //Handling click on recently viewed card
    function handleClick(band) {
        navigate('/events/' + band.name);
        window.scrollTo({top: 0, behaviour: 'smooth'});
    }

    return (

        <div>
            <Typography variant="h4" marginBottom={2}>Recently Viewed</Typography>
            {recentlyViewed.length < 1
                ? (
                    <p>No Bands Recently Viewed</p>
                )
                : (
                    <Box
                        sx={{
                        mb: 7,
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        position: 'relative'
                    }}>
                        <ScrollContainer>
                            <Grid
                                alignItems="stretch"
                                container
                                spacing={{
                                xs: 2
                            }}
                                wrap="nowrap"
                                id='scrollable'>

                                {recentlyViewed
                                    .slice(0)
                                    .reverse()
                                    .map((element) => (
                                        <Grid key={element.id} item>
                                            <Item>
                                                <CardActionArea
                                                    style={{
                                                    textAlign: 'center',
                                                    height:'100%'
                                                }}
                                                    onClick={() => handleClick(element)}>
                                                    <CardMedia
                                                        component="img"
                                                        image={element.thumb_url}
                                                        alt="green iguana"
                                                        className='cicular--portrait'
                                                        style={{
                                                        margin: '0 auto',
                                                        padding: '20px',
                                                        width: '100%',
                                                        height: 'auto',
                                                        borderRadius: '50%'
                                                    }}/>
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {element.name}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Item>
                                        </Grid>
                                    ))}
                            </Grid>
                        </ScrollContainer>
                    </Box>
                )}
        </div>
    );
}
