import * as React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const CustomMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  /* overflow-wrap: break-word; */
  /* width: 250px; */
  box-sizing: border-box;
  /* overflow-wrap: normal; */
  /* word-break: break-word; */
  /* overflow-wrap: anywhere; */
  /* overflow-wrap: break-all; */
  .menu-item__text {
    /* display: -webkit-box; */
    /* -webkit-line-clamp: 2; */
    /* -webkit-box-orient: vertical; */
    /* overflow: hidden; */
    /* padding: 12px; */
    padding-bottom: 8px;
    white-space: nowrap;
    overflow-x: scroll;
  }
`;

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {/* <Avatar sx={{ width: 32, height: 32 }} src="https://i.imgur.com/pyXHzsn.png">T</Avatar> */}
            <Avatar sx={{ width: 32, height: 32 }} src="https://i.imgur.com/pyXHzsn.png">K</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            maxWidth: 250,
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <CustomMenuItem>
          {/* <Avatar src="https://i.imgur.com/pyXHzsn.png" /> Taiming */}
          <Avatar src="https://i.imgur.com/pyXHzsn.png" />
          <div className="menu-item__text">My name is Awesome Taiming with long second name.</div>
        </CustomMenuItem>
        {/* <MenuItem>
          <Avatar /> My account
        </MenuItem> */}
        {/* <Divider /> */}
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
