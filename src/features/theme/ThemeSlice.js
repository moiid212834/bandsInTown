import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  mode:'dark',
};

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem("preferedMode",state.mode);
    },
    rehydrateMode: (state) =>{
      if(localStorage.getItem("preferedMode") === null || localStorage.getItem("preferedMode") === 'undefined' || localStorage.getItem("preferedMode") === '')
      state.mode = 'dark';
      else state.mode = localStorage.getItem("preferedMode") ;
    }
  },
});

export const { toggleMode,rehydrateMode } = ThemeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state
export const selectMode = (state) => state.theme.mode;

export default ThemeSlice.reducer;
