import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './App.css';

import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
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
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth={false} className={classes.container}>
        <AppBar />
        <Drawer />
        <div className={classes.contentContainer}>
          <Typography variant="subtitle1" component="h6">
            Metrics
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
      </Container>
    </div>
  );
}

export default App;
