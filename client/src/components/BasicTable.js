import React, { useEffect , useState } from 'react';

import {useNavigate} from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, name, dob, email) {
  return { id, name, dob, email };
}


const BasicTable = () => { 
  
  

    const navigate = useNavigate();
    const [userData, setUserData] = useState({});

    const rows = [
      createData(1,userData.name , userData.dob, userData.email),
   
    ];
  
    const callAboutPage = async () => {
      try{
          const res = await fetch('/getData', {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            credentials: "include"
          });
  
          const data = await res.json();
          console.log(data);
          setUserData(data);
  
          if(!res.status === 200){
            const error = new Error(res.error);
            throw error;
          }
  
      } catch (err) {
          console.log(err);
          navigate('/login');
      }
    }
  
    useEffect(() =>{
      callAboutPage();
    }, []);
  
  return (
    
    <TableContainer style={{marginTop:200}} component={Paper}>
    
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          {/* Table heading */}
          <TableCell>#</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Date Of Birth</TableCell>
            <TableCell align="left">Email</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        {/* User details */}
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{userData.name}</TableCell>
              <TableCell align="left">{userData.dob}</TableCell>
              <TableCell align="left">{userData.email}</TableCell>
              

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default BasicTable;