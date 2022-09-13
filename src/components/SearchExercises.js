/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useDispatch } from 'react-redux';
import { reduxActions } from '../services/reduxSlice';
import {
  useLazyGetBodyPartListQuery,
  useLazyGetAllQuery,
} from '../services/exerciseApi';

import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';

const SearchExercises = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [allExercises, setAllExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  const [getBodyParts] = useLazyGetBodyPartListQuery();
  const [getAll] = useLazyGetAllQuery();

  useEffect(() => {
    getBodyParts().then((data) => setBodyParts(data));
    getAll().then(({ data }) => setAllExercises(data));
  }, []);

  const handleSearch = () => {
    if (searchTerm) {
      const searchedExercises = allExercises.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm) ||
          item.target.toLowerCase().includes(searchTerm) ||
          item.equipment.toLowerCase().includes(searchTerm) ||
          item.bodyPart.toLowerCase().includes(searchTerm)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearchTerm('');
      dispatch(reduxActions.setExercises(searchedExercises));
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="49px"
        textAlign="center"
        color="#10fd73"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: '700', border: 'none' },
            width: { lg: '1170px', xs: '350px' },
            backgroundColor: '#fff',
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />

        <Button
          className="search-btn"
          variant="contained"
          sx={{
            bgcolor: 'black',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '173px', xs: '80px' },
            height: '56px',
            position: 'absolute',
            right: '0px',
            fontSize: { lg: '20px', xs: '14px' },
            borderRadius: '0px',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          navigation={true}
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
          {bodyParts?.data?.map((item) => (
            <SwiperSlide
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              key={item.id || item}
              title={item.id || item}
              itemID={item.id || item}
            >
              {bodyParts ? (
                <BodyPart item={item} />
              ) : (
                <ExerciseCard exercise={item} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
