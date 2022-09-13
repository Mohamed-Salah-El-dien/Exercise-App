import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: '150px', xs: '70px' }, ml: { xs: '50px' } }}
      position="relative"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Stack>
        <Typography color="#10fd73" fontWeight="600" fontSize="26px">
          GYMTASTIC
        </Typography>

        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: '44px', xs: '40px' } }}
          mb="23px"
          mt="30px"
          color="white"
        >
          TRANSFORM YOUR FITNESS INTO SHAPE
        </Typography>

        <Typography
          color="white"
          fontSize="22px"
          fontFamily="Alegreya"
          lineHeight="35px"
        >
          We help you stay in shape and have a healthy life.
        </Typography>

        <Stack>
          <a
            href="#exercises"
            style={{
              marginTop: '45px',
              textDecoration: 'none',
              width: '200px',
              textAlign: 'center',
              background: '#10fd73',
              padding: '14px',
              fontSize: '22px',
              textTransform: 'none',
              color: 'black',
              borderRadius: '4px',
            }}
          >
            Get Starting
          </a>
        </Stack>
      </Stack>

      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
