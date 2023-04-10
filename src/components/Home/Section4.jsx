import { useState, useEffect } from 'react'

import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import './Section4.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Section4 = () => {
  var [employeeState, setEmployeeState] = useState(0);
  var [branchState, setBranchState] = useState(0);
  var [clientState, setClientState] = useState(0);
  var [orderState, setOrderState] = useState(0);

  
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (employeeState < 600){
        setEmployeeState(employeeState + 1);
      }
      if (branchState < 200){
        setBranchState(branchState + 1);
      }
      if (clientState < 3000){
        setClientState(clientState + 1);
      }
      if (orderState < 2){
        setOrderState(orderState + 1);
      }
      
    }, 10);

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div id='section4'>
      <h1>Numbers Speak!</h1>
      <h3>We have made a good start to realize our Vision 2030.</h3>
   
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} sx={{ flexWrap: "nowrap", flexDirection: { xs: "column", sm: "column", md: "row" } }}>
          {Array.from(Array(4)).map((_, index) => (
            <Grid item xs={12} sm={12} md={3} key={index}>
              <Item id="section4Item">{
                index == 0 ?
                  <div>
                    <h2>{employeeState}+</h2>
                    <h2>Employees</h2>
                  </div>
                  :
                  (index == 1 ?
                    <div>
                      <h2>{branchState}+</h2>
                      <h2>Branch Network</h2>
                    </div> :
                    (index == 2 ?
                      <div>
                        <h2>{clientState}+</h2>
                        <h2>Satisfied Clients</h2>
                      </div> :
                      <div>
                        <h2>{orderState}+</h2>
                        <h2>Orders Delivered</h2>
                      </div>
                    )
                  )
              }</Item>

            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default Section4;