import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: '44px', xs: '25px' } }}
        fontWeight={700}
        color="white"
        mb="33px"
        textAlign="center"
      >
        Watch{' '}
        <span style={{ color: '#10fd73', textTransform: 'capitalize' }}>
          {name}{' '}
        </span>
        exercise videos
      </Typography>

      <Stack
        sx={{ flexDirection: 'row', gap: '30px' }}
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 6)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{
                borderTopLeftRadius: '20px',
                objectFit: 'cover',
                overflow: 'hidden',
              }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />

            <Box pl="8px">
              <Typography
                sx={{ fontSize: { lg: '20px', xs: '18px' } }}
                fontWeight={600}
                color="white"
                textAlign="center"
              >
                {item.video.title}
              </Typography>

              <Typography fontSize="14px" color="white" textAlign="center">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
