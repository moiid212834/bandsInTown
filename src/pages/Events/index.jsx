import * as React from 'react';
import Typography from '@mui/material/Typography';
import {IconButton, Stack} from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import {selectSelectedBand, getAndSelectArtist, selectArtistStatus} from '../../features/artists/ArtistSlice';
import Events from '../../components/events';
import Suggestions from '../../components/artistSuggestions';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from 'react';

//Landing Page
//Indvidually Accesible through ./events/{artistname}
export default function EventsPage() {
    const selectedBand = useSelector(selectSelectedBand); // gets currently selected band from the redux store
    const artistStatus = useSelector(selectArtistStatus); // gets the status of the getAndSelectArtist Call 
    const imgUrl = selectedBand.image_url; // gets the image url of the selected band to render
    
    const params = useParams(); // useParams hook to read the URL to get the artist name
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // update artist if the url changes
    useEffect(() => {
        dispatch(getAndSelectArtist(params.id));
    }, [params.id])

    return (
        <div>

            <div
                className="coolBackground"
                style={{
                backgroundImage: artistStatus === 'succeeded'
                    ? "url(" + imgUrl + ")"
                    : 'unset'
            }}>
                <div
                    className="blur"
                    style={{
                    padding: '20px',
                    color: 'white'
                }}>
                    <IconButton
                        style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        borderRadius: '10px',
                        color: 'white'
                    }}
                        onClick={() => navigate('/')}>
                        <ArrowBackIcon ></ArrowBackIcon>&nbsp;&nbsp;Back
                    </IconButton>
                    {selectedBand.error
                        ? (
                            <Typography
                                variant="h1"
                                sx={{
                                fontWeight: 'bold',
                                textShadowRadius: 10
                            }}>
                                No Artist Found
                            </Typography>
                        )
                        : (
                            <Typography
                                variant="h1"
                                sx={{
                                fontWeight: 'bold',
                                textShadowRadius: 10
                            }}>
                                {artistStatus === 'succeeded'
                                    ? selectedBand.name
                                    : ''}
                            </Typography>
                        )}
                </div>
            </div>
            <Stack direction={'row'}>

                <div
                    style={{
                    padding: '20px',
                    width: '100%'
                }}>
                    <Typography
                        variant="h2"
                        sx={{
                        fontWeight: 'bold'
                    }}>
                        Upcoming Events
                    </Typography>

                    <div style={{
                        paddingTop: '10px'
                    }}>
                        <Events artist={params.id}></Events>
                    </div>
                </div>
            </Stack>
            <div style={{
                padding: '20px'
            }}>
                <Suggestions></Suggestions>
            </div>
        </div>
    )
}