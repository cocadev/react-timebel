import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Hidden,
  Typography,
  Link,
  makeStyles
} from '@material-ui/core';
import Logo from 'src/components/Logo';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    height: 64
  },
  logo: {
    marginRight: theme.spacing(2)
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
}));

function TopBar({ className, ...rest }) {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      color="default"
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <Logo className={classes.logo} />
        </RouterLink>
        <Hidden mdDown>
          <Typography
            variant="caption"
            color="textSecondary"
          >
            Version
            {' '}
            1.0.0
          </Typography>
        </Hidden>
        <Box flexGrow={1} />
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/app"
          underline="none"
          variant="body2"
        >
          Dashboard
        </Link>

        <Divider className={classes.divider} />
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/login-unprotected"
          underline="none"
          variant="body2"
        >
          <Button
            color="secondary"
            component="a"
            variant="contained"
            size="small"
          >
            Login
         </Button>
        </Link>
       
          
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
