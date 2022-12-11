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
import typography from "assets/theme/base/typography";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Icon from "@mui/material/Icon";

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
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

function SingleGoalGraph() {
  const navigate = useNavigate();
  const { size } = typography;

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
            <Card sx={{padding: '1.5rem', marginBottom: '2rem'}}>
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
            <GradientLineChart
            title="Sales Overview"
            description={
                <SoftBox display="flex" alignItems="center">
                <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                    <Icon className="font-bold">arrow_upward</Icon>
                </SoftBox>
                <SoftTypography variant="button" color="text" fontWeight="medium">
                    4% more{" "}
                    <SoftTypography variant="button" color="text" fontWeight="regular">
                    in 2021
                    </SoftTypography>
                </SoftTypography>
                </SoftBox>
            }
            height="20.25rem"
            chart={gradientLineChartData}
            />
       
      </SoftBox>
    </DashboardLayout>
  );
}

export default SingleGoalGraph;

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



