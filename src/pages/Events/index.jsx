import * as React from 'react';
import Typography from '@mui/material/Typography';
import {IconButton, Stack} from '@mui/material';
import {useSelector,useDispatch} from 'react-redux';
import {selectSelectedBand,getAndSelectArtist, selectSearchedBand} from '../../features/artists/ArtistSlice';
import Events from '../../components/events';
import Suggestions from '../../components/artistSuggestions';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate,useParams} from 'react-router-dom';
import {useEffect} from 'react';

export default function EventsPage() {
    const selectedBand = useSelector(selectSelectedBand);
    const imgUrl = selectedBand.image_url;
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAndSelectArtist(params.id));
    },[params.id])

    return (
        <div>
            <div
                className="coolBackground"
                style={{
                backgroundImage: "url(" + imgUrl + ")"
            }}>
                <div
                    className="blur"
                    style={{
                    padding: '20px',
                    color:'white'
                }}>
                    <IconButton
                        style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        borderRadius: '10px',
                        color:'white'
                    }}
                        onClick={() => navigate('/')}>
                        <ArrowBackIcon ></ArrowBackIcon>&nbsp;&nbsp;Back
                    </IconButton>
                    <Typography
                        variant="h1"
                        sx={{
                        fontWeight: 'bold',
                        textShadowRadius: 10
                    }}>
                        {selectedBand.name}
                    </Typography>
                </div>
            </div>
            <Stack direction={'row'}>

                <div style={{
                    padding: '20px',
                    width:'100%'
                }}>
                    <Typography
                        variant="h2"
                        sx={{
                        fontWeight: 'bold',
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