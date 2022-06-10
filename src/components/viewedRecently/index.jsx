import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, IconButton} from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import {selectArtistStatus, selectRecentlyViewed, selectBand} from '../../features/artists/ArtistSlice';
import {useNavigate} from 'react-router-dom';
import {experimentalStyled as styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Grid4Skeleton as Skeleton} from '../Skeleton';
import {getEvents} from '../../features/events/EventsSlice';
import ScrollContainer from 'react-indiana-drag-scroll';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Item = styled(Card)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark'
        ? '#121212'
        : '#f1f1f1',
    ...theme.typography.body2,
    padding: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '230px'
}));

export default function ViewedRecently() {
    const dispatch = useDispatch();
    const recentlyViewed = useSelector(selectRecentlyViewed);
    const artistStatus = useSelector(selectArtistStatus);
    const navigate = useNavigate();

    function handleClick(band) {
        navigate('/events/'+band.name);
        window.scrollTo({top: 0, behaviour: 'smooth'});
    }

    // function slideRight() {
    //     var scrollable = document.selectElementById('scrollable');
    // }

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
                        {/* <IconButton
                            variant='contained'
                            // onClick={() => slideRight()}
                            sx={{
                            position: 'absolute',
                            backgroundColor: 'black',
                            right: '20px',
                            top: '40%',
                            zIndex: 999999,
                            boxShadow: '1px 1px 10px 4px black'
                        }}>
                            <ArrowForwardIcon></ArrowForwardIcon>
                        </IconButton> */}
                        <ScrollContainer>

                            <Skeleton status={artistStatus}></Skeleton>
                            <Grid
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
                                                    textAlign: 'center'
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
