import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import SvgIcon from '@material-ui/core/SvgIcon';

import { ReactComponent as BoxIcon } from '../box.svg';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerHeading: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '16px',
    fontWeight: 700,
    fontSize: 'larger',
  },
  listItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
}));

const Drawer = () => {
  const classes = useStyles();

  return (
    <MDrawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="permanent"
      anchor="left">
      <div className={`${classes.drawerHeading} ${classes.toolbar}`}>
        Procuretail
      </div>
      <List className={classes.listItemContainer}>
        <ListItem button>
          <ListItemIcon>
            <DashboardOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SvgIcon component={BoxIcon} viewBox="0 0 128 128" />
          </ListItemIcon>
          <ListItemText primary="My Product" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Warehouse" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocalMallOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CreditCardOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Payments" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button style={{ marginTop: 'auto' }}>
          <ListItemIcon>
            <HeadsetOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
      </List>
    </MDrawer>
  );
};

export default Drawer;
