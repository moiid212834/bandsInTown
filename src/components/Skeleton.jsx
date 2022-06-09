import { Skeleton} from '@mui/material';
import { Grid,Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectArtistStatus } from '../features/artists/ArtistSlice';

export const Grid4Skeleton = (props) => {
    console.log(props.status)
    return (
        <div style={{ display: props.status === 'loading' ? 'block' : 'none' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={3} md={3}>
                    <div style={{ textAlign: 'center' }}>
                        <Skeleton variant="circular"  style={{ margin: '20px auto', height:'150px', width:'150px' }} />
                        <Skeleton variant="text" width={'100%'} />
                    </div>
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                    <div style={{ textAlign: 'center' }}>
                        <Skeleton variant="circular"  style={{ margin: '20px auto', height:'150px', width:'150px' }} />
                        <Skeleton variant="text" width={'100%'} />
                    </div>
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                    <div style={{ textAlign: 'center' }}>
                        <Skeleton variant="circular"  style={{ margin: '20px auto', height:'150px', width:'150px' }} />
                        <Skeleton variant="text" width={'100%'} />
                    </div>
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                    <div style={{ textAlign: 'center' }}>
                        <Skeleton variant="circular"  style={{ margin: '20px auto', height:'150px', width:'150px' }} />
                        <Skeleton variant="text" width={'100%'} />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export const SingleSkeleton = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Skeleton variant="rectangular" width='100%' height="130px" sx={{borderRadius:'7px'}}></Skeleton>
            <Skeleton variant="rectangular" width='100%' height="130px" sx={{borderRadius:'7px'}}></Skeleton>
            <Skeleton variant="rectangular" width='100%' height="130px" sx={{borderRadius:'7px'}}></Skeleton>
        </Stack>
    )
}

export const Grid4SkeletonCards = (props) => {
    console.log(props.status)
    return (
        <div style={{ display: props.status === 'loading' ? 'block' : 'none', width:'100%' }}>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 2, md: 9 }}>
                <Grid item xs={2} sm={3} md={3}>
                    <div style={{ textAlign: 'center' }}>
                        <Skeleton variant="rectangular" width='100%' height="130px" sx={{borderRadius:'7px'}}></Skeleton>
                    </div>
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                    <div style={{ textAlign: 'center' }}>
                        <Skeleton variant="rectangular" width='100%' height="130px" sx={{borderRadius:'7px'}}></Skeleton>
                    </div>
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                    <div style={{ textAlign: 'center' }}>
                        <Skeleton variant="rectangular" width='100%' height="130px" sx={{borderRadius:'7px'}}></Skeleton>
                    </div>
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                    <div style={{ textAlign: 'center' }}>
                        <Skeleton variant="rectangular" width='100%' height="130px" sx={{borderRadius:'7px'}}></Skeleton>
                    </div>
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                    <div style={{ textAlign: 'center' }}>
                        <Skeleton variant="rectangular" width='100%' height="130px" sx={{borderRadius:'7px'}}></Skeleton>
                    </div>
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                    <div style={{ textAlign: 'center' }}>
                        <Skeleton variant="rectangular" width='100%' height="130px" sx={{borderRadius:'7px'}}></Skeleton>
                    </div>
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                    <div style={{ textAlign: 'center' }}>
                        <Skeleton variant="rectangular" width='100%' height="130px" sx={{borderRadius:'7px'}}></Skeleton>
                    </div>
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                    <div style={{ textAlign: 'center' }}>
                        <Skeleton variant="rectangular" width='100%' height="130px" sx={{borderRadius:'7px'}}></Skeleton>
                    </div>
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                    <div style={{ textAlign: 'center' }}>
                        <Skeleton variant="rectangular" width='100%' height="130px" sx={{borderRadius:'7px'}}></Skeleton>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
