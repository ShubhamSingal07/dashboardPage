import React from 'react';

import { Button, TextField, ListItem, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: 300,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
}));

const DateFilter = ({ toggleDrawer }) => {
  const classes = useStyles();

  return (
    <List className={classes.container}>
      <ListItem>
        <TextField
          id="date"
          label="From Date"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </ListItem>

      <ListItem>
        <TextField
          id="date"
          label="To Date"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </ListItem>

      <ListItem style={{ marginTop: 'auto' }}>
        <Button
          variant="contained"
          color="secondary"
          style={{ width: '100%' }}
          onClick={toggleDrawer(false)}>
          Apply
        </Button>
      </ListItem>
    </List>
  );
};

export default DateFilter;
