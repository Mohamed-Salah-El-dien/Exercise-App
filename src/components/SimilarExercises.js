import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography
        sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }}
        fontWeight={700}
        color="white"
        mb="33px"
        textAlign="center"
      >
        Similar{' '}
        <span style={{ color: '#10fd73', textTransform: 'capitalize' }}>
          exercises{' '}
        </span>
        that target the same muscle
      </Typography>

      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {targetMuscleExercises.length !== 0 ? (
          <Swiper
            modules={[Navigation]}
            navigation={true}
            spaceBetween={20}
            grabCursor={true}
            direction={'horizontal'}
            breakpoints={{
              500: {
                width: 500,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
              991: {
                width: 991,
                slidesPerView: 3,
              },
            }}
          >
            {targetMuscleExercises?.data?.map((item) => (
              <SwiperSlide
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={item.id || item}
                title={item.name || item}
                itemID={item.id || item}
              >
                <ExerciseCard exercise={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '25px' },
          ml: '20px',
          mt: { lg: '100px', xs: '60px' },
        }}
        fontWeight={700}
        color="white"
        mb="33px"
        textAlign="center"
      >
        Similar{' '}
        <span style={{ color: '#10fd73', textTransform: 'capitalize' }}>
          exercises{' '}
        </span>
        with the same equipments
      </Typography>

      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {equipmentExercises.length !== 0 ? (
          <Swiper
            modules={[Navigation]}
            navigation={true}
            spaceBetween={20}
            grabCursor={true}
            direction={'horizontal'}
            breakpoints={{
              500: {
                width: 500,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
              991: {
                width: 991,
                slidesPerView: 3,
              },
            }}
          >
            {equipmentExercises?.data?.map((item) => (
              <SwiperSlide
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={item.id || item}
                title={item.name || item}
                itemID={item.id || item}
              >
                <ExerciseCard exercise={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
