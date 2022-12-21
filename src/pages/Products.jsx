/** @format */

import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProducts } from '../redux/apiCalls'

function Products() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)

  useEffect(() => {
    getProducts(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
    deleteProduct(id, dispatch)
  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <Product>
            <Avatar src={params.row.image} sx={{ width: 40, height: 40 }} />
            <ProductName>{params.row.title}</ProductName>
          </Product>
        )
      }
    },
    { field: 'inStock', headerName: 'Stock', width: 200 },
    {
      field: 'price',
      headerName: 'Price',
      width: 150
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row._id}`}>
              <IconButton aria-label='Edit' color='secondary'>
                <EditOutlinedIcon />
              </IconButton>
            </Link>

            <IconButton
              aria-label='delete'
              color='warning'
              onClick={() => handleDelete(params.row._id)}
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
        rows={products}
        columns={columns}
        getRowId={(row) => row._id}
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
