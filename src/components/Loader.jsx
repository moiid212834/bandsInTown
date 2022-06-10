import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

/**
 * Loader
 * Displays a loader when react is suspended. Used in App.js as <Loader>
 */
export default function LinearIndeterminate() {
    return (
        <div
            style={{
            display: 'flex',
            height: '90vh',
            width: '90vw',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto'
        }}>
            <CircularProgress></CircularProgress>
        </div>
    );
}