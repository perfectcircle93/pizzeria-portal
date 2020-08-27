import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const demoContent = [
  {order: '123', description: 'pizza margharita', takeaway: 'yes', status: 'new order'},
  {order: '234', description: 'vegetarian pasta with mushrooms', takeaway: 'yes', status: 'prepared'},
  {order: '345', description: '2 lemonade and chicken with broccoli', takeaway: 'no', status: 'new order'},
  {order: '456', description: 'todays special', takeaway: 'no', status: 'prepared'},
  {order: '567', description: 'chicken soup', takeaway: 'yes', status: 'new order'},
  {order: '678', description: 'chef special', takeaway: 'no', status: 'prepared'},
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button className={styles.button} variant="contained" color="secondary">new order</Button>
        </>
      );
    case 'new order':
      return (
        <Button className={styles.button} variant="contained" color="secondary">new order</Button>
      );
    case 'prepared':
      return (
        <ThemeProvider theme={theme}>
          <Button className={styles.button} variant="contained" color="primary">prepared</Button>
        </ThemeProvider>
      );
     
    default:
      return null;
  }
};

const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order</TableCell>
          <TableCell>Order Description</TableCell>
          <TableCell>Takeaway</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell>
              {row.order && (
                <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                  {row.order}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.description}
            </TableCell>
            <TableCell>
              {row.takeaway}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;