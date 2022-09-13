import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import {
  useLazyGetExerciseDetailQuery,
  useLazyGetTargetMuscleQuery,
  useLazyGetEquipmentQuery,
} from '../services/exerciseApi';
import { useLazyGetVideosQuery } from '../services/youtubeApi';

import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  const [getExercise] = useLazyGetExerciseDetailQuery(id);
  const [getVideos] = useLazyGetVideosQuery(exerciseDetail.name);
  const [getTarget] = useLazyGetTargetMuscleQuery(exerciseDetail.target);
  const [getEquipment] = useLazyGetEquipmentQuery(exerciseDetail.equipment);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDetailData = await getExercise(id);
      setExerciseDetail(exerciseDetailData.data);

      getVideos(exerciseDetailData.data.name).then(({ data }) =>
        setExerciseVideos(data.contents)
      );

      getTarget(exerciseDetailData.data.target).then((data) =>
        setTargetMuscleExercises(data)
      );

      getEquipment(exerciseDetailData.data.equipment).then((data) =>
        setEquipmentExercises(data)
      );
    };

    fetchExercisesData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />

      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />

      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
