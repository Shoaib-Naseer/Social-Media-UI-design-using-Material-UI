import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FaceIcon from '@mui/icons-material/Face';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { Box } from '@mui/system';
import {
  Badge,
  createTheme,
  darkScrollbar,
  ThemeProvider,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';
import './index.css';
import {
  AppBar,
  InputBase,
  Stack,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import Add from './components/Add';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});
const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));
const Iconsbar = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));
const Userbar = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

function App() {
  const [mode, setMode] = useState('light');
  const [open, setOpen] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <AppBar position="sticky">
          <StyledToolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Shoaib Naseer
            </Typography>
            <FaceIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
            <Search>
              {' '}
              <InputBase placeholder="Search Any thing" />
            </Search>
            <Iconsbar>
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>

              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>

              <Avatar
                sx={{ width: 30, height: 30 }}
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                onClick={(e) => setOpen(true)}
              />
            </Iconsbar>
            <Userbar onClick={(e) => setOpen(true)}>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Typography variant="span">Remy Sharp</Typography>
            </Userbar>
          </StyledToolbar>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </AppBar>
        <Stack
          marginTop={2}
          direction="row"
          spacing={4}
          justifyContent="space-between"
        >
          <Sidebar setMode={setMode} mode={mode} />

          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
