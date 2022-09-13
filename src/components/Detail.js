import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
      title: 'Body Part',
    },
    {
      icon: TargetImage,
      name: target,
      title: 'Target',
    },
    {
      icon: EquipmentImage,
      name: equipment,
      title: 'Equipment Used',
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography
          sx={{ fontSize: { lg: '64px', xs: '30px' } }}
          fontWeight={700}
          textTransform="capitalize"
          color="#10fd73"
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontSize: { lg: '24px', xs: '18px' },
            bgcolor: 'rgba(0, 0, 0, .4)',
            p: '2px',
          }}
          color="white"
          borderRadius="10px"
          p="2px"
        >
          Exercises keep you strong.
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your mood and gain energy.
        </Typography>

        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              variant="contained"
              color="warning"
              sx={{
                borderRadius: '50%',
                width: '100px',
                height: '100px',
              }}
              title={item.title}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: '50px', height: '50px' }}
              />
            </Button>

            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: '30px', xs: '20px' } }}
              color="white"
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
