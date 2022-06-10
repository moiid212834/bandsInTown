import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useSelector} from 'react-redux';
import {selectMode} from '../../features/theme/ThemeSlice';

/**
 * Universal App footer
 */
export default function Footer(props) {
    const mode = useSelector(selectMode);
    return (
        <Box
            sx={{
            flexGrow: 1
        }}
            style={{
            backgroundColor: mode === 'dark'
                ? '#222'
                : '#f1f1f1'
        }}>
            <div
                style={{
                margin: '10px auto 0px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography
                    variant="div"
                    component="div"
                    sx={{
                    flexGrow: 1,
                    marginLeft: 2,
                    textAlign: 'center'
                }}>
                    &copy; Copyright 2022
                </Typography>
            </div>
        </Box>
    );
}
