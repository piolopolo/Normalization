// Import dependencies
import React from 'react';
import { Box, Typography } from '@mui/material';

// Import images
import FooterBackground from '../../public/Footer.png';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer"
      sx={{
        backgroundImage: `url(${FooterBackground.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Typography variant="body1">© 2024 My Website</Typography>
    </Box>
  );
};

export default Footer;
