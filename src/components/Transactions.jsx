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

function Transactions() {
  return (
    <Container>
      <Title>Latest transactions</Title>
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
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                <Profil>
                  <Avatar
                    src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
                    sx={{ width: 30, height: 30 }}
                  />
                  <Name>Susan Carol</Name>
                </Profil>
              </TableCell>
              <TableCell>2 jun 2022</TableCell>
              <TableCell>122.00 €</TableCell>
              <TableCell>
                <Button color='success' variant='outlined' size='small'>
                  Approved
                </Button>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                <Profil>
                  <Avatar
                    src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
                    sx={{ width: 30, height: 30 }}
                  />
                  <Name>Susan Carol</Name>
                </Profil>
              </TableCell>
              <TableCell>2 jun 2022</TableCell>
              <TableCell>122.00 €</TableCell>
              <TableCell>
                <Button color='error' variant='outlined' size='small'>
                  Declined
                </Button>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                <Profil>
                  <Avatar
                    src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
                    sx={{ width: 30, height: 30 }}
                  />
                  <Name>Susan Carol</Name>
                </Profil>
              </TableCell>
              <TableCell>2 jun 2022</TableCell>
              <TableCell>122.00 €</TableCell>
              <TableCell>
                <Button color='success' variant='outlined' size='small'>
                  Approved
                </Button>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                <Profil>
                  <Avatar
                    src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
                    sx={{ width: 30, height: 30 }}
                  />
                  <Name>Susan Carol</Name>
                </Profil>
              </TableCell>
              <TableCell>2 jun 2022</TableCell>
              <TableCell>122.00 €</TableCell>
              <TableCell>
                <Button color='warning' variant='outlined' size='small'>
                  Pending
                </Button>
              </TableCell>
            </TableRow>
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
