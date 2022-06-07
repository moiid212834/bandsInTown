import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/ThemeSlice';
import artistReducer from '../features/artists/ArtistSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    artists: artistReducer,
  },
});
