import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  ExpandLess,
  ExpandMore,
  ShoppingCartOutlined,
  SettingsOutlined,
  LocalMallOutlined,
  HeadsetOutlined,
  CreditCardOutlined,
  DashboardOutlined,
  StarBorder,
  ExitToApp,
} from '@material-ui/icons';
import {
  SvgIcon,
  ListItemIcon,
  ListItemText,
  ListItem,
  List,
  Drawer as MDrawer,
  Collapse,
} from '@material-ui/core';

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
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Drawer = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState({
    orders: false,
    settings: false,
  });

  const handleClick = (name) => () => {
    setOpen({ ...open, [name]: !open[name] });
  };

  return (
    <MDrawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="permanent"
      anchor="left">
      <div className={`${classes.drawerHeading} ${classes.toolbar}`}>Procuretail</div>
      <List className={classes.listItemContainer}>
        <ListItem button>
          <ListItemIcon>
            <DashboardOutlined />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button component={Link} to={'/myproduct'}>
          <ListItemIcon>
            <SvgIcon component={BoxIcon} viewBox="0 0 128 128" />
          </ListItemIcon>
          <ListItemText primary="My Product" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <ShoppingCartOutlined />
          </ListItemIcon>
          <ListItemText primary="Warehouse" />
        </ListItem>

        <ListItem button onClick={handleClick('orders')}>
          <ListItemIcon>
            <LocalMallOutlined />
          </ListItemIcon>
          <ListItemText primary="Orders" />
          {open.orders ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open.orders} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button component={Link} to={'/payments'}>
          <ListItemIcon>
            <CreditCardOutlined />
          </ListItemIcon>
          <ListItemText primary="Payments" />
        </ListItem>

        <ListItem button onClick={handleClick('settings')}>
          <ListItemIcon>
            <SettingsOutlined />
          </ListItemIcon>
          <ListItemText primary="Settings" />
          {open.settings ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open.settings} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button style={{ marginTop: 'auto' }}>
          <ListItemIcon>
            <HeadsetOutlined />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
      </List>
    </MDrawer>
  );
};

export default Drawer;
