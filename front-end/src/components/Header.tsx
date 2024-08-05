import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

import Logo from '../../public/Logo.svg';
import HeaderBackground from '../../public/Header.png';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Box
        sx={{
          backgroundImage: `url(${HeaderBackground.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '10px 20px',
        }}
      >
        <Toolbar>
          <Box display="flex" alignItems="center">
            <img src={Logo.src} alt="Logo" style={{ marginRight: 16, width: 50, height: 50 }} />
            <Typography variant="h6">My Website</Typography>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;
