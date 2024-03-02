import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function AllMechanics() {
  const [mechanics, setMechanics] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://mechanic-system-backend-bano-qabil-mern.vercel.app/api/admin/mechanicprofile'); // Replace '/api/users' with your API endpoint
      setMechanics(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Mechanic Name</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">CNIC</TableCell>
              <TableCell align="right">Phone No</TableCell>
              <TableCell align="right">Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mechanics.map((mechanic) => (
              <TableRow key={mechanic.name}>
                <TableCell component="th" scope="row">
                  {mechanic.name}
                </TableCell>
                <TableCell align="right">{mechanic._id}</TableCell>
                <TableCell align="right">{mechanic.CNIC}</TableCell>
                <TableCell align="right">{mechanic.phoneNumber}</TableCell>
                <TableCell align="right">{mechanic.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AllMechanics;
