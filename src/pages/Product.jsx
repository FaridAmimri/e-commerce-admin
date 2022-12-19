/** @format */

import styled from 'styled-components'
import { productData } from '../data'
import Button from '@mui/material/Button'
import Chart from '../components/Chart'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Avatar from '@mui/material/Avatar'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Product() {
  const [inStock, setInStock] = useState('yes')
  const [isActive, setIsActive] = useState('yes')

  const handleStock = (event) => {
    setInStock(event.target.value)
  }

  const handleIsActive = (event) => {
    setIsActive(event.target.value)
  }

  return (
    <Container>
      <Header>
        <TitleHeader>Product</TitleHeader>
        <Link to='/newProduct'>
          <Button color='primary' variant='contained' size='small'>
            Create
          </Button>
        </Link>
      </Header>

      <ProductWrapper>
        <Top>
          <Left>
            <Chart
              data={productData}
              title='Sales Performance'
              dataKey='Sales'
            />
          </Left>
          <Right>
            <ProductHeader>
              <ProductImage>
                <Avatar
                  src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                  sx={{ width: 32, height: 32 }}
                />
              </ProductImage>
              <ProductName>Apple Airpods</ProductName>
            </ProductHeader>
            <ProductDetails>
              <ProductItem>
                <Key>id:</Key>
                <Value>123</Value>
              </ProductItem>
              <ProductItem>
                <Key>sales:</Key>
                <Value>5123</Value>
              </ProductItem>
              <ProductItem>
                <Key>active:</Key>
                <Value>yes</Value>
              </ProductItem>
              <ProductItem>
                <Key>in stock:</Key>
                <Value>no</Value>
              </ProductItem>
            </ProductDetails>
          </Right>
        </Top>

        <Bottom>
          <TitleForm>Product Name</TitleForm>
          <Box
            component='form'
            className='form'
            sx={{
              '& .MuiTextField-root': { m: 1, width: '300px' }
            }}
          >
            <FormLeft>
              <TextField
                label='Apple Airpod'
                placeholder='Apple Airpod'
                size='large'
                variant='outlined'
                style={{ margin: '15px 0' }}
              />
              <FormControl style={{ margin: '15px 0' }}>
                <InputLabel id='select'>In Stock</InputLabel>
                <Select
                  labelId='inStock'
                  id='inStock'
                  value={inStock}
                  label='inStock'
                  onChange={handleStock}
                >
                  <MenuItem value='yes'>Yes</MenuItem>
                  <MenuItem value='no'>No</MenuItem>
                </Select>
              </FormControl>
              <FormControl style={{ margin: '15px 0' }}>
                <InputLabel id='select'>Active</InputLabel>
                <Select
                  labelId='active'
                  id='active'
                  value={isActive}
                  label='Active'
                  onChange={handleIsActive}
                >
                  <MenuItem value='yes'>Yes</MenuItem>
                  <MenuItem value='no'>No</MenuItem>
                </Select>
              </FormControl>
            </FormLeft>

            <FormRight>
              <ProductAvatar>
                <AvatarWrapper>
                  <Avatar
                    src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                    sx={{ width: 100, height: 100 }}
                  />
                  <input
                    accept='image/*'
                    style={{ display: 'none' }}
                    id='file'
                    type='file'
                  />
                  <label htmlFor='file'>
                    <Button variant='outlined' component='span' size='small'>
                      <UploadFileIcon />
                    </Button>
                  </label>
                </AvatarWrapper>
                <Button color='primary' variant='outlined'>
                  Update
                </Button>
              </ProductAvatar>
            </FormRight>
          </Box>
        </Bottom>
      </ProductWrapper>
    </Container>
  )
}

export default Product

const Container = styled.div`
  flex: 4;
  padding: 20px;
`

/****    HEADER   *****/
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  a {
    text-decoration: none;
  }
`
const TitleHeader = styled.h1`
  width: 100%;
`

/****    PRODUCT WRAPPER  *****/

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Top = styled.div`
  width: 100%;
  display: flex;
`

const Left = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex: 1;
  margin: 20px;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

const ProductHeader = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const ProductImage = styled.div`
  margin-right: 20px;
`

const ProductName = styled.span`
  font-weight: 600;
`

const ProductDetails = styled.div`
  margin-top: 10px;
`

const ProductItem = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
`

const Key = styled.span``

const Value = styled.span`
  font-weight: 300;
`

const Bottom = styled.div`
  margin: 20px;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  .form {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const TitleForm = styled.h3`
  margin-bottom: 10px;
`

const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
`

const FormRight = styled.div``

const ProductAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  label {
    margin-left: 15px;
  }
`
