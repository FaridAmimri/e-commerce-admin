/** @format */

import styled from 'styled-components'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react'
import { userRequest } from '../requests'
import { format } from 'timeago.js'

function Transactions() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get('orders')
        setOrders(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getOrders()
  }, [])
  return (
    <Container>
      <Title>Latest Transactions</Title>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='transactions table'>
          <TableHead>
            <TableRow>
              <TableCell className='tableHead'>Customer</TableCell>
              <TableCell className='tableHead'>Date</TableCell>
              <TableCell className='tableHead'>Amount</TableCell>
              <TableCell className='tableHead'>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  <Profil>
                    <Avatar
                      src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
                      sx={{ width: 30, height: 30 }}
                    />
                    <Name>{order.userId}</Name>
                  </Profil>
                </TableCell>
                <TableCell>{format(order.createdAt)}</TableCell>
                <TableCell>{order.amount} €</TableCell>
                <TableCell>
                  <Button color='success' variant='outlined' size='small'>
                    {order.status}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Transactions

const Container = styled.div`
  flex: 2;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  .tableHead {
    font-weight: bold;
  }
`

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
`

const Profil = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.span`
  padding-left: 10px;
  font-weight: 600;
`
