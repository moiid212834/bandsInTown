import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea} from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {selectEventStatus, selectEventsList, getEvents} from '../../features/events/EventsSlice';
import {experimentalStyled as styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Grid4SkeletonCards as Skeleton} from '../Skeleton';

/**
 * Styled card item used in the grid for events
 */
const Item = styled(Card)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark'
        ? '#121212'
        : '#f1f1f1',
    ...theme.typography.body2,
    padding: 0,
    textAlign: 'center',
    color: theme.palette.mode === 'dark'
        ? '#f1f1f1'
        : '#121212',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    justifyContent: 'space-between'
}));

/**
 * Pretifies date time from the api response.
 * @param datetime - datetime value from the API response.
 */
function prettyDate(datetime) {
    let date = new Date(datetime);
    /* Date format you have */
    let dateMDY = `${date.getDate()} ${date.toLocaleString('default', {month: 'short'})}, ${date.getFullYear()} - ${ ('0' + date.getHours()).substr(-2)}:${ ('0' + date.getMinutes()).substr(-2)}`;
    /* Date converted to MM-DD-YYYY format */
    return dateMDY;
}

export default function Suggestions(props) {
    const dispatch = useDispatch();
    const events = useSelector(selectEventsList);
    const eventsStatus = useSelector(selectEventStatus);

    useEffect(() => {
        dispatch(getEvents(props.artist))
    }, [props.artist]);

    return (
        <Box sx={{
            mb: 7
        }}>
            {eventsStatus === "loading"
                ? (
                    <Skeleton status={eventsStatus}></Skeleton>
                )
                : (
                    <div>
                        {events.length < 1 || events.errorMessage
                            ? (
                                <div style={{}}>
                                    No Events Found
                                </div>
                            )
                            : (

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
                                    {events.map((element, key) => (
                                        <Grid
                                            item
                                            style={{
                                            display: 'flex',
                                            width: '100%'
                                        }}
                                            key={key}
                                            xs={12}
                                            sm={4}
                                            md={4}>
                                            <Item>
                                                <div
                                                    style={{
                                                    textAlign: 'left'
                                                }}>
                                                    <CardContent>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h6"
                                                            sx={{
                                                            lineHeight: '1',
                                                            paddingBottom: '10px'
                                                        }}
                                                            fontWeight='bold'
                                                            component="div">
                                                            {element.title === ''
                                                                ? 'Concert'
                                                                : element.title}
                                                        </Typography>

                                                        <Typography gutterBottom variant="div" component="div">
                                                            {element.venue.name}, {element.venue.city}, {element.venue.country}
                                                        </Typography>
                                                        <Typography gutterBottom variant="div" component="div">
                                                            {prettyDate(element.datetime)}hrs
                                                        </Typography>

                                                    </CardContent>
                                                </div>
                                                <Button onClick={() => window.location.href = element.url}>View Details</Button>
                                            </Item>
                                        </Grid>
                                    ))}
                                </Grid>

                            )}
                    </div>
                )}
        </Box>
    );
}