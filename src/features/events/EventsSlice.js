import {createSlice} from '@reduxjs/toolkit';
// import {Artists} from './ArtistsList';
import {createAsyncThunk} from '@reduxjs/toolkit';
// import { fetchArtists } from './ArtistApi';

const initialState = {
    eventsList:[],
    status:'idle'
};
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const getEvents = createAsyncThunk('events/fetchevents', async(artist) => {
    const url='https://rest.bandsintown.com/artists/'+encodeURIComponent(artist)+'/events?app_id=foo';
    console.log(url);
    const response = await fetch(url);
    // The value we return becomes the `fulfilled` action payload return
    // response.json;
    const data = await response.json();
    console.log('events',data);
    await sleep(2000);
    return data;
});

// Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't
// actually mutate the state because it uses the Immer library, which detects
// changes to a "draft state" and produces a brand new immutable state based off
// those changes
export const EventsSlice = createSlice({
    name: 'events', 
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    extraReducers: (builder) => {
        builder.addCase(getEvents.pending, (state) => {
            state.status = 'loading';
        }).addCase(getEvents.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.eventsList = action.payload;
        });;
    }
});

export const {
    searchArtist,
} = EventsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state
export const selectEventsList = (state) => state.events.eventsList;
export const selectEventStatus = (state) => state.events.status;

export default EventsSlice.reducer;