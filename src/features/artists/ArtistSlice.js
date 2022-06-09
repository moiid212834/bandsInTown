import {createSlice} from '@reduxjs/toolkit';
// import {Artists} from './ArtistsList';
import {createAsyncThunk} from '@reduxjs/toolkit';
// import { fetchArtists } from './ArtistApi';

const initialState = {
    search:{
        term:'',
        status: 'idle', // idle | loading | succeeded | failed
    },
    searchedBand: {},
    selectedBand:{},
    recentlyViewed:[],
    suggestionList: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null
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

export const getArtist = createAsyncThunk('artists/fetchArtist', async(search) => {
    const response = await fetch('https://rest.bandsintown.com/artists/'+urlReady(search)+'?app_id=foo')
    // The value we return becomes the `fulfilled` action payload return
    // response.json;
    const data = await response.json();
    await sleep(2000);
    return data;
});

export const getSuggestions = createAsyncThunk('artists/fetchSuggestions', async(payload) => {
    const response = await fetch(payload.url)
    // The value we return becomes the `fulfilled` action payload return
    // response.json;
    const data = await response.json();
    await sleep(2000);
    return data;
});

// Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't
// actually mutate the state because it uses the Immer library, which detects
// changes to a "draft state" and produces a brand new immutable state based off
// those changes
export const ArtistSlice = createSlice({
    name: 'artists', 
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        searchArtist: (state, action) => {
            state.search.term = action.payload;
        },
        selectBand:(state,action) =>{
            state.selectedBand=action.payload;
            var i = state.recentlyViewed.findIndex(x => (x.id === action.payload.id));
            if(i <= -1){
                state.recentlyViewed.push(action.payload);
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getArtist.pending, (state) => {
            state.search.status = 'loading';
        }).addCase(getArtist.fulfilled, (state, action) => {
            state.search.status = 'succeeded';
            state.searchedBand = action.payload;
        })

        builder.addCase(getSuggestions.pending, (state) => {
            state.status = 'loading';
        }).addCase(getSuggestions.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.suggestionList = [...state.suggestionList,action.payload];
        });;
    }
});

export const {
    searchArtist,
    selectBand,
} = ArtistSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state
export const selectSearchedBand = (state) => state.artists.searchedBand;
export const selectSelectedBand = (state) => state.artists.selectedBand;
export const selectSuggestions = (state) => state.artists.suggestionList;
export const selectArtistStatus = (state) => state.artists.status;
export const selectArtistError = (state) => state.artists.error;
export const selectSearchTerm = (state) => state.artists.search.term;
export const selectSearchStatus = (state) => state.artists.search.status;
export const selectRecentlyViewed = (state) => state.artists.recentlyViewed;


export default ArtistSlice.reducer;