import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { styles } from './NavBar.styles';

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar variant='regular'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={styles.menuIcon}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={styles.linkBox}>
            <Link style={styles.link} href="/">Inicio</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}