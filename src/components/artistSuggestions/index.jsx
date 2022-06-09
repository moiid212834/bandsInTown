import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions} from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { selectArtistStatus, getSuggestions, selectSuggestions, selectBand} from '../../features/artists/ArtistSlice';
import {useNavigate} from 'react-router-dom';
import {experimentalStyled as styled} from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Grid4Skeleton as Skeleton} from '../Skeleton';
import { getEvents } from '../../features/events/EventsSlice';

const Item = styled(Card)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark'
        ? '#121212'
        : '#f1f1f1',
    ...theme.typography.body2,
    padding: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary
}));

export default function Suggestions() {
    const dispatch = useDispatch();
    const suggestions = useSelector(selectSuggestions);
    const artistStatus = useSelector(selectArtistStatus);
    const navigate = useNavigate();

    function requestSuggestions(){
        const searchValues = ['the smiths', 'maroon5', 'coldplay', 'queen'];
        searchValues.forEach(function(value) {
            dispatch(getSuggestions({url:`https://rest.bandsintown.com/artists/${value}?app_id=foo`}));
        });

    }

    function handleClick (band) {
        dispatch(selectBand(band));
        dispatch(getEvents(band.name));
        navigate('/events');
        window.scrollTo({top:0, behaviour:'smooth'});
    }

    useEffect(() => {
        if (artistStatus === 'idle') {
            requestSuggestions();
        }
    },[]);
    
    return (
        
        <Box sx={{
            mb: 7
        }}>
            <Typography variant="h4" marginBottom={2}>Suggested Artists</Typography>
            <Skeleton status={artistStatus}></Skeleton>
            <Grid
                container
                spacing={{
                xs: 2,
                md: 3
            }}
                columns={{
                xs: 4,
                sm: 8,
                md: 12
            }}>
                {suggestions
                    .slice(0, 4)
                    .map((element,key) => (
                        <Grid key={element.id} item xs={2} sm={3} md={3}>
                            <Item>
                                <CardActionArea
                                    style={{
                                    textAlign: 'center'
                                    
                                }}
                                onClick={()=>handleClick(element)}
                                >
                                    <CardMedia
                                        component="img"
                                        image={element.thumb_url}
                                        alt="green iguana"
                                        className='cicular--portrait'
                                        style={{
                                        margin: '0 auto',
                                        padding: '20px',
                                        
                                        }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {element.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <FacebookIcon
                                        style={{
                                        margin: '0 auto'
                                    }}
                                        className={'clickableIcon'}
                                        onClick={() => {
                                        window.location.href = element.facebook_page_url
                                    }}></FacebookIcon>
                                </CardActions>
                            </Item>
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
}
