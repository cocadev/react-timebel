import React from 'react';
// import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  online: {
    backgroundColor: '#2ac940',
    height: 12,
    width: 12,
    borderRadius: 6,
    marginRight: 5,
    marginTop: -6
  },
}));

function Dashboard({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Box mt={2}>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
          lg={3}
        >
          <Card>
            <CardHeader title="Event Information" />
            <Divider />
            <CardContent>
              <Grid
                container
                spacing={1}
              >
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="h6"
                    color="textPrimary"
                  >
                    Dates
                  </Typography>

                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography
                    gutterBottom
                    color="textSecondary"
                    variant="caption"
                  >
                    10/21/20 9 AM PST - 10/22/20 10 PM PST
                  </Typography>

                </Grid>
              </Grid>
              <Grid
                  container
                  spacing={1}
                >
                  <Grid item xs={12} md={4}>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                    >
                      Status
                    </Typography>

                  </Grid>
                  <Grid item xs={12} md={8} className={classes.row}>
                    <div className={classes.online}></div>
                    <Typography
                      gutterBottom
                      color="textSecondary"
                      variant="caption"
                    >
                      IN PROGRESS
                    </Typography>

                  </Grid>
                </Grid>
              <Grid
                  container
                  spacing={1}
                >
                  <Grid item xs={12} md={4}>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                    >
                      Participants
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography
                      gutterBottom
                      color="textSecondary"
                      variant="caption"
                    >
                      Complete:11
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography
                      gutterBottom
                      color="textSecondary"
                      variant="caption"
                    >
                      Pending:16
                    </Typography>
                  </Grid>
                </Grid>
            </CardContent>

          </Card>
          <Box mt={3}>
            <Card>
              <CardHeader title="Participant" />
              <Divider />

              <CardContent>

              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={9}
        >
          <Card>
            <CardHeader title="Main Data Visualization" />
            <Divider />
            <CardContent>

              <Box mt={2}>

              </Box>
              <Box mt={2}>

              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={2}>
        <Button
          color="primary"
          variant="contained"
          type="submit"
        >
          Launch Event
            </Button>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  className: PropTypes.string
};

export default Dashboard;
