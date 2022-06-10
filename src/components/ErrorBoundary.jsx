import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

/**
 * Error Boundary
 * Replaces the deafult page or body if there is a javscript error during runtime.
 */
class Component extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    //Catching the error
    componentDidCatch(err, info) {
        this.setState({hasError: true});

        //Logging error on console
        console.error({message: err.message, info});
    }

    render() {
        const {hasError} = this.state;
        const {children} = this.props;

        if (hasError) {
            return (
                <Paper
                    sx={{
                    m: 2,
                    p: 4
                }}>
                    <Typography variant="h1" component="h1">
                        There seems to be an error
                    </Typography>
                    <Typography component="h6">
                        Please get in touch with the system administrator.
                    </Typography>
                </Paper>
            );
        }

        return children;
    }
}

export default Component;
