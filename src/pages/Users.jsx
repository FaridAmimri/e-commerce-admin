/** @format */

import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid'
import { userRows } from '../data'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Users() {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((user) => user.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <Profil>
            <Avatar src={params.row.avatar} sx={{ width: 30, height: 30 }} />
            <Username>{params.row.username}</Username>
          </Profil>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 150
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <IconButton aria-label='Edit' color='secondary'>
                <EditOutlinedIcon />
              </IconButton>
            </Link>

            <IconButton
              aria-label='delete'
              color='warning'
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteOutlinedIcon />
            </IconButton>
          </>
        )
      }
    }
  ]

  return (
    <Container>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </Container>
  )
}

export default Users

const Container = styled.div`
  flex: 4;
`

const Profil = styled.div`
  display: flex;
  align-items: center;
`

const Username = styled.span`
  margin-left: 10px;
`
