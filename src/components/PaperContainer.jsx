import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      padding: theme.spacing(4),
    },
    justifyContent: 'space-between',
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paperCaption: {
    color: 'grey',
  },
}));

export default function PaperContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined" className={classes.paper}>
        <div>
          <Typography variant="h5" component="h5">
            &#x20b9; 2000
          </Typography>
          <Typography
            variant="caption"
            component="h5"
            className={classes.paperCaption}>
            Revenue
          </Typography>
        </div>
      </Paper>
      <Paper variant="outlined" className={classes.paper}>
        <div>
          <Typography variant="h5" component="h5">
            123
          </Typography>
          <Typography
            variant="caption"
            component="h5"
            className={classes.paperCaption}>
            Order Received
          </Typography>
        </div>
      </Paper>
      <Paper variant="outlined" className={classes.paper}>
        <div>
          <Typography variant="h5" component="h5">
            3223
          </Typography>
          <Typography
            variant="caption"
            component="h5"
            className={classes.paperCaption}>
            No of products sold
          </Typography>
        </div>
      </Paper>
      <Paper variant="outlined" className={classes.paper}>
        <div>
          <Typography variant="h5" component="h5">
            125
          </Typography>
          <Typography
            variant="caption"
            component="h5"
            className={classes.paperCaption}>
            Cancelled order
          </Typography>
        </div>
      </Paper>
      <Paper variant="outlined" className={classes.paper}>
        <div>
          <Typography variant="h5" component="h5">
            &#x20b9; 2134
          </Typography>
          <Typography
            variant="caption"
            component="h5"
            className={classes.paperCaption}>
            Refund
          </Typography>
        </div>
      </Paper>
      <Paper variant="outlined" className={classes.paper}>
        <div>
          <Typography variant="h5" component="h5">
            &#x20b9; 2134
          </Typography>
          <Typography
            variant="caption"
            component="h5"
            className={classes.paperCaption}>
            Refund
          </Typography>
        </div>
      </Paper>
    </div>
  );
}
