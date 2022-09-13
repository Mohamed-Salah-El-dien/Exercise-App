/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import { useDispatch, useSelector } from 'react-redux';
import { reduxActions } from '../services/reduxSlice';
import {
  useLazyGetAllQuery,
  useLazyGetBodyPartQuery,
} from '../services/exerciseApi';

import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = () => {
  const dispatch = useDispatch();
  const bodyPart = useSelector((state) => state.redux.bodyPart);
  const exercises = useSelector((state) => state.redux.exercises);

  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  const [getAll, { isFetching: allFetch }] = useLazyGetAllQuery();
  const [getBodyPart, { isFetching: singleFetch }] =
    useLazyGetBodyPartQuery(bodyPart);

  // /////////////////////////////////////////////////////
  // /////////////////////////////////////////////////////

  useEffect(() => {
    if (bodyPart === 'all') {
      getAll().then(({ data }) => dispatch(reduxActions.setExercises(data)));
    } else {
      getBodyPart(bodyPart).then(({ data }) =>
        dispatch(reduxActions.setExercises(data))
      );
    }
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (allFetch || singleFetch) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        color="#10fd73"
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="46px"
      >
        Showing Results
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: '107px', xs: '50px' } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>

      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="secondary"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
