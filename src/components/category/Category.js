import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Category = () => {
  return (
    <Box
      className="cate-box-container"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '280px',
      }}
    >
      <Paper
        elevation={2}
        className="cat-paper-item"
        sx={{
          margin: '30px',
          width: 270,
          height: 200,
          background: 'white',
          borderRadius: 10,
          border: '2px solid #6AAF5F',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" sx={{ fontSize: '20px' }}>이혼😵‍💫</Typography>
      </Paper>
      <Paper
        elevation={2}
        className="cat-paper-item"
        sx={{
          margin: '30px',
          width: 270,
          height: 200,
          background: '',
          borderRadius: 10,
          border: '2px solid #6AAF5F',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" sx={{ fontSize: '20px' }}>상속👦🏻</Typography>
      </Paper>
    </Box>
  );
};

export default Category;
