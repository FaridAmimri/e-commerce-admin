/** @format */

import styled from 'styled-components'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import Avatar from '@mui/material/Avatar'
import { useState } from 'react'

import React from 'react'

function NewProduct() {
  const [active, setActive] = useState('yes')

  const handleSelect = (event) => {
    setActive(event.target.value)
  }
  return (
    <Container>
      <Title>New Product</Title>
      <Box
        component='form'
        className='form'
        sx={{
          '& .MuiTextField-root': { width: '300px' }
        }}
      >
        <FileWrapper>
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
              Choose File
            </Button>
          </label>
        </FileWrapper>

        <TextFieldWrapper>
          <TextField
            label='Name'
            placeholder='Name'
            variant='outlined'
            style={{ margin: '15px 0' }}
          />
          <TextField
            label='Stock'
            placeholder='Stock'
            variant='outlined'
            style={{ margin: '15px 0' }}
          />
        </TextFieldWrapper>

        <SelectWrapper>
          <FormControl>
            <InputLabel id='select'>Active</InputLabel>
            <Select
              labelId='select'
              id='select'
              value={active}
              label='Active'
              onChange={handleSelect}
            >
              <MenuItem value='yes'>Yes</MenuItem>
              <MenuItem value='no'>No</MenuItem>
            </Select>
          </FormControl>
        </SelectWrapper>

        <ButtonWrapper>
          <Button color='primary' variant='contained' size='large'>
            Create
          </Button>
        </ButtonWrapper>
      </Box>
    </Container>
  )
}

export default NewProduct

const Container = styled.div`
  flex: 4;
  padding: 20px;
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Title = styled.h1`
  margin: 10px;
`

const FileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  label {
    margin-left: 15px;
  }
`

const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const SelectWrapper = styled.div`
  margin: 15px 0;
`

const ButtonWrapper = styled.div`
  margin: 10px 0;
`
