import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {useNavigate} from 'react-router-dom';


const initialState = {
    search:{
        term:'',
        status: 'idle', // idle | loading | succeeded | failed
    },
    searchedBand: {},
    selectedBand:{},
    recentlyViewed:[],
    suggested:{
        suggestionList: [],
        status:'idle', // idle | loading | succeeded | failed
    },
    status: 'idle', // idle | loading | succeeded | failed
    error: null
};

function urlReady(string){
    let result;
    result = string.split('"').join('%27C');
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
    return data;
});

export const getAndSelectArtist = createAsyncThunk('artists/fetchAndSelectArtist', async(search) => {
    const response = await fetch('https://rest.bandsintown.com/artists/'+urlReady(search)+'?app_id=foo')
    // The value we return becomes the `fulfilled` action payload return
    // response.json;
    const data = await response.json();
    return data;
});

export const getSuggestions = createAsyncThunk('artists/fetchSuggestions', async(payload) => {
    const response = await fetch(payload.url)
    // The value we return becomes the `fulfilled` action payload return
    // response.json;
    const data = await response.json();
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
            localStorage.setItem("search",JSON.stringify(state.search.term));
        },
        rehydrateRecentlyViewed:(state) =>{
            if (JSON.parse(localStorage.getItem('recentlyViewed'))===null || JSON.parse(localStorage.getItem('recentlyViewed')) === undefined) state.recentlyViewed=[];
            else state.recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed'));
        },
        rehydrateSearch:(state) =>{
            if (JSON.parse(localStorage.getItem('search'))===null || JSON.parse(localStorage.getItem('search')) === undefined) {
                state.search.term="";
                state.search.status="idle";
            }
            else state.search.term = JSON.parse(localStorage.getItem('search'));
        },
        rehydrateSearchResults:(state) =>{
            if (JSON.parse(localStorage.getItem('searchResult'))===null || JSON.parse(localStorage.getItem('searchResult')) === undefined) state.searchedBand={};
            else state.searchedBand = JSON.parse(localStorage.getItem('searchResults'));
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getArtist.pending, (state) => {
            state.search.status = 'loading';
        }).addCase(getArtist.fulfilled, (state, action) => {
            state.search.status = 'succeeded';
            state.searchedBand = action.payload;
            localStorage.setItem("searchResults",JSON.stringify(state.searchedBand));
        })

        builder.addCase(getAndSelectArtist.pending, (state) => {
            state.status = 'loading';
        }).addCase(getAndSelectArtist.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.selectedBand = action.payload;
            var i = state.recentlyViewed.findIndex(x => (x.id === action.payload.id));
            if(i <= -1 && action.payload.id){
                state.recentlyViewed.push(action.payload);
                localStorage.setItem("recentlyViewed",JSON.stringify(state.recentlyViewed));
            }
        })

        builder.addCase(getSuggestions.pending, (state) => {
            state.suggested.status = 'loading';
        }).addCase(getSuggestions.fulfilled, (state, action) => {
            state.suggested.status = 'succeeded';
            state.suggested.suggestionList = [...state.suggested.suggestionList,action.payload];
        });;
    }
});

export const {
    searchArtist,
    rehydrateRecentlyViewed,
    rehydrateSearch,
    rehydrateSearchResults,
} = ArtistSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state
export const selectSearchedBand = (state) => state.artists.searchedBand;
export const selectArtistStatus = (state) => state.artists.status;

export const selectSelectedBand = (state) => state.artists.selectedBand;

export const selectSuggestions = (state) => state.artists.suggested.suggestionList;
export const selectSuggestedArtistStatus = (state) => state.artists.suggested.status;


export const selectArtistError = (state) => state.artists.error;

export const selectSearchTerm = (state) => state.artists.search.term;
export const selectSearchStatus = (state) => state.artists.search.status;
export const selectRecentlyViewed = (state) => state.artists.recentlyViewed;


export default ArtistSlice.reducer;