import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

// Define the type for your table data
type ChandaData = {
  date: string;
  open: number;
  close: number;
  volume: number;
};

const data: ChandaData[] = [
  { date: '2024-12-01', open: 100, close: 110, volume: 5000 },
  { date: '2024-12-02', open: 110, close: 120, volume: 6000 },
  { date: '2024-12-03', open: 120, close: 130, volume: 7000 },
  { date: '2024-12-04', open: 130, close: 140, volume: 8000 },
];

const ChandaTable: React.FC = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="chanda table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Open</TableCell>
            <TableCell>Close</TableCell>
            <TableCell>Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.open}</TableCell>
              <TableCell>{row.close}</TableCell>
              <TableCell>{row.volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ChandaTable;
