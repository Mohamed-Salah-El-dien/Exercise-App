import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

import { useSelector, useDispatch } from 'react-redux';
import { reduxActions } from '../services/reduxSlice';

const BodyPart = ({ item }) => {
  const dispatch = useDispatch();
  const bodyPart = useSelector((state) => state.redux.bodyPart);

  const handleClick = () => {
    dispatch(reduxActions.setBodyPart(item));
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
  };

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: '4px solid #10fd73',
              background: 'rgba(235, 235, 235, .2)',
              color: 'white',
              borderBottomLeftRadius: '20px',
              borderBottomRightRadius: '20px',
              borderTopRightRadius: '20px',
              width: '230px',
              height: '282px',
              cursor: 'pointer',
              gap: '37px',
            }
          : {
              background: 'rgba(235, 235, 235, .2)',
              color: 'white',
              borderBottomLeftRadius: '20px',
              borderBottomRightRadius: '20px',
              borderTopRightRadius: '20px',
              width: '230px',
              height: '282px',
              cursor: 'pointer',
              gap: '37px',
            }
      }
      onClick={handleClick}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: '40px', height: '40px', color: 'white' }}
      />

      <Typography
        fontSize="30px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="white"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
