import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/ThemeSlice';
import artistReducer from '../features/artists/ArtistSlice';
import eventsReducer from '../features/events/EventsSlice';
import { routerReducer } from 'react-router-redux'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    artists: artistReducer,
    events: eventsReducer,
    routing: routerReducer,
  },
});
