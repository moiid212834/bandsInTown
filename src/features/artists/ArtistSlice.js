import { createSlice } from '@reduxjs/toolkit';
// import {Artists} from './ArtistsList';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchArtists } from './ArtistApi';

const initialState = {
  list: [],
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

export const getArtists = createAsyncThunk(
    'artists/fetchArtist',
    async () => {
      const response = await fetch('http://localhost:3000/artists')
      // The value we return becomes the `fulfilled` action payload
      // return response.json;
      const data = await response.json();
      return data;
    }
  );

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
export const ArtistSlice = createSlice({
  name: 'artists',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selectArtist: (state, action) => {
      state.selectedId = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArtists.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getArtists.fulfilled, (state, action) => {
        
        state.status = 'succeeded';
        state.list = action.payload;
      });
  },
});

export const { toggleMode } = ArtistSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state
export const selectMode = (state) => state.artists.selectedId;
export const selectAll = (state) => state.artists.list;
export const selectArtistStatus = (state) => state.artists.status;
export const selectArtistError = (state) => state.artists.error;

export default ArtistSlice.reducer;