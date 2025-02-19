import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye ,faTrash, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import SearchSection from "layout/MainLayout/Header/SearchSection";

export default function PharmacistList() {
  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/pharmacy/")
      .then((res) => {
        console.log(res.data);
        setDoctor(res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


  return (
    <>
      <div className="box" >
        {/* <SearchSection/> */}
        <Button variant="outlined">ADD</Button>
      </div>
      <div className="box">

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Doctor Name</StyledTableCell>
                <StyledTableCell align="right">Department</StyledTableCell>
                <StyledTableCell align="right">Time&nbsp;(Start-End)</StyledTableCell>
                <StyledTableCell align="right">Blood</StyledTableCell>
                <StyledTableCell align="right">phNumber&nbsp;(+91)</StyledTableCell>
                <StyledTableCell align="right">Account Number</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {doctor.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">{row.department}</StyledTableCell>
                  <StyledTableCell align="right">{row.time[0].startTime}-{row.time[1].endTime}</StyledTableCell>
                  <StyledTableCell align="right">{row.bloodGroup}</StyledTableCell>
                  <StyledTableCell align="right">{row.phone}</StyledTableCell>
                  <StyledTableCell align="right">{row.accountNumber}</StyledTableCell>
                  <StyledTableCell align="center" >
                    <Button variant="outlined" color="success" style={{ marginRight: '5px' }}><FontAwesomeIcon icon={faPenToSquare} /></Button>
                    <Button variant="outlined" style={{ marginRight: '5px' }}> <FontAwesomeIcon icon={faEye} /></Button>
                    <Button variant="outlined" color="error" style={{ marginRight: '5px' }}> <FontAwesomeIcon icon={faTrash} /></Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

