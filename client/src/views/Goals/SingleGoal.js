/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { styled } from "@mui/system";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SoftButton from "components/SoftButton";

function SingleGoal() {
  const navigate = useNavigate();

  const navigateToSIngleGoal = (id) => {
    navigate(`/goals/${id}`);
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <Stack direction= 'row' spacing={3} mb={4}>
        <StyledGoal sx={{backgroundColor: randomColor()}} variant='body2'>Awareness</StyledGoal>
        <Typography alignSelf='center'>Goal: Increase user sign ups by 12,000</Typography>
        </Stack>
      <Grid container spacing={2} >
        <Grid item xs={4} onClick={() => navigateToSIngleGoal(val.id)}>
                  <Card sx={{ padding: '1rem'}} >
                    <Box >
                        <Typography variant="h1" fontWeight={700}>7</Typography>
                        <Typography>Completed experiments</Typography>
                    </Box>
                  </Card>
              </Grid>
              <Grid item xs={4} onClick={() => navigateToSIngleGoal(val.id)}>
                  <Card sx={{ padding: '1rem'}} >
                    <Box >
                        <Typography variant="h1" fontWeight={700}>7</Typography>
                        <Typography>Completed experiments</Typography>
                    </Box>
                  </Card>
              </Grid>
              <Grid item xs={4} onClick={() => navigateToSIngleGoal(val.id)}>
                  <Card sx={{ padding: '1rem'}} >
                    <Box >
                        <Typography variant="h1" fontWeight={700}>7</Typography>
                        <Typography>Completed experiments</Typography>
                    </Box>
                  </Card>
              </Grid>
      </Grid>
        <Box mt={4} mb={4}>
        <SoftButton
            //   component={Link}
            //   to={action.route}
              color='primary'
            
              fullWidth
            >
              Run a new experiment
            </SoftButton>
        </Box>
        <Box>
            <Typography>Ongoing experiments</Typography>
            <Stack my={4}>
                <Card sx={{padding: '1.5rem'}}>
                    <Grid container spacing={2} onClick={() => navigateToSIngleGoal(val.id)}>
                        <Grid item xs={6}>
                                <Box >
                                    <Typography>Experiment #8</Typography>
                                    <Typography>Completed experiments</Typography>
                                </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={2} >
                                <Grid item xs={4}>
                                        <Box>
                                            <Typography>Time left</Typography>
                                            <Typography>4 days</Typography>
                                        </Box>
                                </Grid>
                                <Grid item xs={4}>
                                        <Box >
                                            <Typography>Budget</Typography>
                                            <Typography>£1,000</Typography>
                                        </Box>
                                </Grid>
                                <Grid item xs={4}>
                                        <Box >
                                            <Typography>On track</Typography>
                                            <Typography>Y</Typography>
                                        </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Stack>
        </Box>
        <Box>
            <Typography>Successful experiments</Typography>
            <Stack my={4}>
                <Card sx={{padding: '1.5rem'}}>
                    <Grid container spacing={2} onClick={() => navigateToSIngleGoal(val.id)}>
                        <Grid item xs={6}>
                                <Box >
                                    <Typography>Experiment #8</Typography>
                                    <Typography>Completed experiments</Typography>
                                </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={2} >
                                <Grid item xs={4}>
                                        <Box>
                                            <Typography>Time left</Typography>
                                            <Typography>4 days</Typography>
                                        </Box>
                                </Grid>
                                <Grid item xs={4}>
                                        <Box >
                                            <Typography>Budget</Typography>
                                            <Typography>£1,000</Typography>
                                        </Box>
                                </Grid>
                                <Grid item xs={4}>
                                        <Box >
                                            <Typography>On track</Typography>
                                            <Typography>Y</Typography>
                                        </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Stack>
        </Box>
      </SoftBox>
    </DashboardLayout>
  );
}

export default SingleGoal;

const StyledGoal = styled(Typography)({
 borderRadius: '40px',
 textAlign: 'center',
 color: '#fff',
 padding: '0.5rem 1rem'
});


const ExperimentBox = styled(Typography)({
    borderRadius: '40px',
    textAlign: 'center',
    color: '#fff',
    padding: '0.5rem 1rem'
});

const randomColor = () => {
    let colors = [
      '#FC5EFF', '#B3B2EB', '#FD7C53', '#60ADE4', '#8047F9', '#15BA75'
    ]
  
    const randomIndex = Math.floor(Math.random() * colors.length);
    const item = colors[randomIndex];
  
    return item;
  }



