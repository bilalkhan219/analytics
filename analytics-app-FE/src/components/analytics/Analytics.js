import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Chart from "../Chart.js";
import { useAuth } from "../auth/AuthContext.js";

const Analytics = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [data, setData] = useState({
    uniqueVisitors: 0,
    totalPageViews: 0,
    timeSpent: 0,
  });
  const [page, setPage] = useState("all");

  const fetchData = async (selectedPage) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}analytics?pageName=${selectedPage}`
      );
      setData({
        uniqueVisitors: response.data.uniqueVisitors,
        totalPageViews: response.data.totalAnalytics,
        timeSpent: response.data.averageTimeSpent,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    debugger;
    fetchData(page);

    const interval = setInterval(() => fetchData(page), 600000);
    return () => clearInterval(interval);
  }, [page]);

  const handlePageChange = (event) => {
    setPage(event.target.value);
  };

  function handleNavigate(destination) {
    navigate(destination);
  }

  const handleLogout = () => {
    setAuth(null);
    navigate("/login");
  };

  return (
    <Container style={styles.container}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="logout"
            onClick={handleLogout}
          >
            <LogoutIcon />
          </IconButton>
          <Typography variant="body1" sx={{ ml: 1 }}>
            Logout
          </Typography>
        </Box>
      </Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Analytics Dashboard
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="page-select-label">Page</InputLabel>
        <Select
          labelId="page-select-label"
          id="page-select"
          value={page}
          label="Page"
          onChange={handlePageChange}
        >
          <MenuItem value="home">Home</MenuItem>
          <MenuItem value="contact">Contact</MenuItem>
          <MenuItem value="all">All</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Unique Visitors
              </Typography>
              <Typography variant="h4">{data.uniqueVisitors}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Total Page Views
              </Typography>
              <Typography variant="h4">{data.totalPageViews}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Time Spent on Page (sec)
              </Typography>
              <Typography variant="h4">{data.timeSpent}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box style={styles.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleNavigate("/")}
          style={styles.button}
        >
          Move to Home
        </Button>
      </Box>
      <Box my={8}>
        <Chart />
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "2rem",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  },
  button: {
    minWidth: "150px",
  },
};

export default Analytics;
