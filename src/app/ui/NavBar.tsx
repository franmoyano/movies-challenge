import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#000', boxShadow: 'unset' }}>
        <Toolbar variant='regular'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{display: 'flex', gap: '20px'}}>
            <Link style={{ fontWeight: 700 }} href="/">Inicio</Link>
            <Link style={{ fontWeight: 700 }} href="/search">Buscar</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}