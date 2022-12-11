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
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Goals() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  const navigate = useNavigate();

  const navigateToSIngleGoal = (id) => {
    navigate(`/goals/${id}`);
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
      <Grid container spacing={2}>
          {
            dummyData?.map((val) => (
              <Grid item xs={4} key={val.id} onClick={() => navigateToSIngleGoal(val.id)}>
                  <Card sx={{ padding: '1rem'}} >
                    <StyledGoal variant="body2" mb={4} sx={{backgroundColor: val.bgColor}}>{val.goal}</StyledGoal>
                    <Stack direction='row' justifyContent='space-around'>
                      <Box sx={{textAlign: 'center'}}>
                        <Typography variant="h1">{val.goalNo}</Typography>
                        <Typography>Goals</Typography>
                      </Box>
                      <Divider sx={{backgroundColor: 'red'}}/>
                      <Box sx={{textAlign: 'center'}}>
                        <Typography variant="h1">{val.experimentNo}</Typography>
                        <Typography >Experiments</Typography>
                      </Box>
                    </Stack>
                  </Card>
              </Grid>
            ))
          }
          
      </Grid>
        <Card>
          
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Goals;

const StyledGoal = styled(Typography)({
 borderRadius: '40px',
 width: '50%',
 textAlign: 'center',
 color: '#fff',
 padding: '0.5rem'
});

const randomColor = () => {
  let colors = [
    '#FC5EFF', '#B3B2EB', '#FD7C53', '#60ADE4', '#8047F9', '#15BA75'
  ]

  const randomIndex = Math.floor(Math.random() * colors.length);
  const item = colors[randomIndex];

  return item;
}

const dummyData = [
  {
    id: '3992',
    goal: 'Awarness',
    bgColor: randomColor(),
    goalNo: 6,
    experimentNo: 9
  },
  {
    id: '3332',
    goal: 'Aquisition',
    bgColor: randomColor(),
    goalNo: 1,
    experimentNo: 3
  },
  {
    id: '30004',
    goal: 'Activation',
    bgColor: randomColor(),
    goalNo: 0,
    experimentNo: 3
  },
  {
    id: '32304',
    goal: 'Revenue',
    bgColor: randomColor(),
    goalNo: 2,
    experimentNo: 3
  },
]
