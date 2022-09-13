import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        gap: { sm: '123px', xs: '40px' },
        justifyContent: 'none',
      }}
      p="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: '68px',
            height: '68px',
            margin: '0px 20px',
            borderRadius: '50%',
          }}
        />
      </Link>

      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#10fd73',
            borderBottom: '3px solid white',
          }}
        >
          Home
        </Link>

        <a
          href="#exercises"
          style={{ textDecoration: 'none', color: '#10fd73' }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
