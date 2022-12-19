/** @format */

import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid'
import { productRows } from '../data'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Products() {
  const [data, setData] = useState(productRows)

  const handleDelete = (id) => {
    setData(data.filter((user) => user.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <Product>
            <Avatar src={params.row.image} sx={{ width: 30, height: 30 }} />
            <ProductName>{params.row.name}</ProductName>
          </Product>
        )
      }
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'price',
      headerName: 'Price',
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
            <Link to={`/product/${params.row.id}`}>
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

export default Products

const Container = styled.div`
  flex: 4;
`

const Product = styled.div`
  display: flex;
  align-items: center;
`

const ProductName = styled.span`
  margin-left: 10px;
`
