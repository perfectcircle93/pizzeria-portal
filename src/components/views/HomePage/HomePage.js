import React from 'react';
import styles from './HomePage.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

const demoReservation = [
  {id: '123456', type: 'booked', duration: '12.00-14.00', table: '1'},
  {id: '234567', type: 'event', duration: '13.00-16.30', table: '3'},
];

const demoOrders = [
  {id: '987654', status: 'prepared', table: '2', waiter: 'Tommy'},
];

const renderActions = status => {
  switch (status) {
    case 'booked':
      return (
        <>
          <Button variant="contained" component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking/123456`}>123456</Button>
        </>
      );
    case 'event':
      return (
        <>
          <Button variant="contained" component={NavLink} to={`${process.env.PUBLIC_URL}/tables/events/234567`}>234567</Button>
        </>
      );
    case 'prepared':
      return (
        <>
          <Button variant="contained" component={NavLink} to={`${process.env.PUBLIC_URL}/waiter/order/987654`}>987654</Button>
        </>
      );
    default:
      return null;
  }
};

const Homepage = () => (
  <div>
    <Paper className={styles.component}>
      <Typography variant="h5">RESERVATIONS</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Table</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoReservation.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {renderActions(row.type)}
              </TableCell>
              <TableCell>
                {row.type}
              </TableCell>
              <TableCell>
                {row.duration}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Paper className={styles.component}>
      <Typography variant="h5">ORDERS</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Staus</TableCell>
            <TableCell>Waiter</TableCell>
            <TableCell>Table</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoOrders.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {renderActions(row.status)}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.waiter}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>

);

export default Homepage;