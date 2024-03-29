import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { AppBar,
        Button,
        Toolbar,
        IconButton, 
        Typography, 
        MenuItem,
        Menu,
        Link
        }
from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link as RouterLink } from 'react-router-dom';
import AuxiliaryMenu from '../auxiliaryMenu/AuxiliaryMenu';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      fontWeight: 100
    },
  color: theme.palette.text.primary
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbarLink: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    flexShrink: 0,
    color: theme.palette.text.primary
  },
  transparent:{
    background: 'transparent',
    boxShadow: 'none'
  }
}));

export default function Header() {
  console.log("styles: ", useStyles());
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  function handleClick() {
    
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link component={RouterLink} to='/mainMarket'>
          Main Market
        </Link>
      </MenuItem>
      <MenuItem>
        <Link component={RouterLink} to='/auxMarket'>
          Auxiliary markets 
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
     
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <AppBar className={classes.transparent} position="static">
        <Toolbar>
          <Link component={RouterLink} to='/'>
            <Typography variant="h4" className={classes.title} noWrap>
              Asset Market
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button>
              <Link
                color="secondary"
                className={classes.toolbarLink}
                component={RouterLink}
                to='/mainMarket'
                underline='none'
              >
                Main Market
              </Link>
            </Button>
            <Button>
              <Link
                color="inherit"
                href="#text-buttons"
                className={classes.toolbarLink}
                component={RouterLink}
                to='/auxMarket'
                underline='none'
              > 
                auxiliary Market
              </Link>
            </Button>
            <AuxiliaryMenu/>
            <IconButton
              edge="end"
              aria-label="Account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="Show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </React.Fragment>
  );
}