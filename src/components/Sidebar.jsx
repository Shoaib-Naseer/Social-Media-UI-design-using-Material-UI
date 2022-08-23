import React from 'react'
import { Box, Switch } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import {List , ListItem ,ListItemText , ListItemButton ,ListItemIcon} from '@mui/material';

const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2} sx={{display:{xs:'none',md:"block"}}}>
      <Box position="fixed">
       <List sx={{width:'100%'}}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home Page" />
            </ListItemButton>
          </ListItem>
           <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch  onChange={e=>setMode(mode === 'light' ? "dark":"light")}/>
            </ListItemButton>
          </ListItem>

        </List>
        </Box>
      </Box>
  )
}

export default Sidebar