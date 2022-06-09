import * as React from 'react';
import Typography from '@mui/material/Typography';
import {IconButton, Stack} from '@mui/material';
import {useSelector} from 'react-redux';
import {selectSearchedBand} from '../../features/artists/ArtistSlice';
import Events from '../../components/events';
import Suggestions from '../../components/artistSuggestions';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';

export default function EventsPage() {
    const searchedBand = useSelector(selectSearchedBand);
    const imgUrl = searchedBand.image_url;
    console.log(searchedBand.name,'eventspage')
    const navigate = useNavigate();
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
                        {searchedBand.name}
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
                        Events
                    </Typography>

                    <div style={{
                        paddingTop: '10px'
                    }}>
                        <Events artist={searchedBand.name}></Events>
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