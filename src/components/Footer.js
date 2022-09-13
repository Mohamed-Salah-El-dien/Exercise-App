import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="80px" pt="10px" bgcolor="rgba(235, 235, 235, .2)">
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: '20px', xs: '15px' } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      © 2022 all rights reserved.
    </Typography>
  </Box>
);

export default Footer;
