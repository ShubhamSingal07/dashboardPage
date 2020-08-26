import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  title: {
    flexGrow: 1,
  },
}));

const AppBar = () => {
  const classes = useStyles();

  return (
    <MAppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <div className={classes.title} />
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <NotificationsOutlinedIcon />
        </IconButton>
        <Avatar className={classes.orange}>A</Avatar>
      </Toolbar>
    </MAppBar>
  );
};

export default AppBar;
