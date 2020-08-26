import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';

import AppBar from './components/AppBar';
import DateFilter from './components/DateFilter';
import Drawer from './components/Drawer';
import MaterialDrawer from '@material-ui/core/Drawer';
import PaperContainer from './components/PaperContainer';
import Table from './components/Table';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#fcfcfc',
  },
  contentContainer: {
    width: `calc(100% - ${drawerWidth}px)`,
    paddingLeft: drawerWidth,
    paddingTop: '80px',
    marginBottom: '1em',
  },
  button: {
    color: 'black',
    backgroundColor: 'white',
    marginRight: 10,
  },
}));

function App() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  return (
    <div className="App">
      <Container maxWidth={false} className={classes.container}>
        <AppBar />
        <Drawer />
        <div className={classes.contentContainer}>
          <Typography
            variant="subtitle1"
            component="h6"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            Metrics
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<FilterListIcon />}
              onClick={toggleDrawer(true)}>
              Filter
            </Button>
          </Typography>
          <PaperContainer />
          <Typography
            variant="subtitle1"
            component="h6"
            style={{ marginTop: '0.5em', marginBottom: '0.5em' }}>
            Order details
          </Typography>
          <Table />
        </div>
        <MaterialDrawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <DateFilter toggleDrawer={toggleDrawer} />
        </MaterialDrawer>
      </Container>
    </div>
  );
}

export default App;
