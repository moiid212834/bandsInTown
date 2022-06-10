import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    eventsList:[],
    status:'idle'
};
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function urlReady(string){
    let result;
    result = string.split('\"').join('%27C');
    result = result.split('/' ).join( '%252F');
    result = result.split('*' ).join( '%252A');
    result = result.split('?' ).join( '%253F');
    return result;
}

export const getEvents = createAsyncThunk('events/fetchevents', async(artist) => {
    const url='https://rest.bandsintown.com/artists/'+urlReady(artist)+'/events?app_id=foo';
    const response = await fetch(url);
    // The value we return becomes the `fulfilled` action payload return
    // response.json;
    const data = await response.json();
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

// The function below is called a selector and allows us to select a value from
// the state
export const selectEventsList = (state) => state.events.eventsList;
export const selectEventStatus = (state) => state.events.status;

export default EventsSlice.reducer;