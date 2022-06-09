import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

class Component extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(err, info) {
    this.setState({
      hasError: true,
    });

    console.error({ message: err.message, info });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Paper sx={{m:2,p:4}}>
          <Typography variant="h4" component="h3">
            There seems to be an error
          </Typography>
          <Typography component="p">
            Please Get in touch with the syste administrator.
          </Typography>
        </Paper>
      );
    }

    return children;
  }
}

Component.propTypes = {
  children: PropTypes.node,
};

Component.defaultProps = {
  children: null,
};

export default Component;
