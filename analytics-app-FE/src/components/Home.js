import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();

  function handleNavigate(destination) {
    navigate(destination);
  }

  return (
    <Container style={styles.container}>
      <Typography variant="h2" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Typography variant="body1" paragraph>
        This is the home page of our application. You can navigate to different sections using the buttons below.
      </Typography>
      <Box style={styles.buttonContainer}>
        <Button variant="contained" color="primary" onClick={() => handleNavigate('/contact')} style={styles.button}>
          Move to Contact
        </Button>
        <Button variant="contained" color="secondary" onClick={() => handleNavigate('/analytics')} style={styles.button}>
          Move to Dashboard
        </Button>
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem',
  },
  button: {
    minWidth: '150px',
  },
};

export default Home;
