import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import {Button, Grid, Stack, Typography} from '@mui/material'
import {SingleSkeleton as Skeleton} from '../Skeleton'

import {useSelector} from 'react-redux';
import {selectSearchedBand, selectSearchStatus, selectSearchTerm} from '../../features/artists/ArtistSlice';
import {FacebookOutlined} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import {experimentalStyled as styled} from '@mui/material/styles';

export default function SearchResults() {
    const searchStatus = useSelector(selectSearchStatus);
    const searchedBand = useSelector(selectSearchedBand);
    const searchTerm = useSelector(selectSearchTerm);
    const navigate = useNavigate();

    const Item = styled(Paper)(({theme}) => ({
        ...theme.typography.body2
    }));

    return (
        <div
            style={{
            display: searchStatus === 'idle'
                ? 'none'
                : 'block'
        }}>
            <Typography sx={{
                mt: 2,
                mb: 1
            }}>
                Search results for "{searchTerm}"</Typography>
            <Box sx={{
                mb: 4
            }}>

                {searchStatus === 'loading'
                    ? (
                        <Skeleton></Skeleton>
                    )
                    : (
                        <Grid
                            container
                            spacing={{
                            xs: 0
                        }}>
                            <Grid item xs={12} sm={8} md={5}>

                                <Item
                                    elevation={6}
                                    sx={{
                                    p: 2
                                }}>
                                    <Stack direction={'row'} alignItems={'center'}>
                                        <Avatar
                                            sx={{
                                            width: '30%',
                                            height: 'auto',
                                            mr: 4
                                        }}
                                            src={searchedBand.image_url}></Avatar>
                                        <div>
                                            <Typography variant='h2'>{searchedBand.name}</Typography>
                                            <Stack
                                                direction={'row'}
                                                alignItems={'center'}
                                                sx={{
                                                mt: 1
                                            }}>
                                                <Button
                                                    style={{
                                                        fontSize:'80%',
                                                        fontWeight:'bold',
                                                        padding:'10px'
                                                    }}
                                                    onClick={() => {
                                                    navigate('/events',)
                                                }}
                                                    variant="contained"
                                                    color="primary">View Events</Button>
                                                <FacebookOutlined
                                                    style={{
                                                    margin: '0 20px'
                                                }}
                                                    fontSize={'large'}
                                                    className={'clickableIcon'}
                                                    onClick={() => {
                                                    window.location.href = searchedBand.facebook_page_url
                                                }}></FacebookOutlined>
                                            </Stack>
                                        </div>
                                    </Stack>
                                </Item>
                            </Grid>
                        </Grid>
                    )}
            </Box>
        </div>
    );
}