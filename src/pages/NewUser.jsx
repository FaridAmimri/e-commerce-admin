/** @format */

import styled from 'styled-components'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import { useState } from 'react'

function NewUser() {
  const [value, setValue] = useState('male')
  const [active, setActive] = useState('')

  const handleRadio = (event) => {
    setValue(event.target.value)
  }

  const handleSelect = (event) => {
    setActive(event.target.value)
  }

  return (
    <Container>
      <Title>New User</Title>

      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '400px' }
        }}
      >
        <FormWrapper>
          <FormLeft>
            <TextField
              label='Username'
              placeholder='faridamimri'
              size='large'
              variant='outlined'
            />
            <TextField
              label='Full Name'
              placeholder='Farid Amimri'
              size='large'
              variant='outlined'
            />
            <TextField
              label='Email'
              placeholder='farid.amimri@gmail.com'
              size='large'
              variant='outlined'
            />
          </FormLeft>
          <FormRight>
            <TextField
              label='Password'
              type='password'
              placeholder='Password'
              size='large'
              variant='outlined'
            />
            <TextField
              label='Phone Number'
              placeholder='+33 6 40 40 82 05'
              size='large'
              variant='outlined'
            />
            <TextField
              label='Address'
              placeholder='Paris, France'
              size='large'
              variant='outlined'
            />
          </FormRight>
        </FormWrapper>

        <RadioSelectWrapper>
          <RadioWrapper>
            <FormControl>
              <FormLabel id='radio'>Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby='radio-button'
                defaultValue='female'
                name='radio'
                value={value}
                onChange={handleRadio}
              >
                <FormControlLabel
                  value='female'
                  control={<Radio />}
                  label='Female'
                />
                <FormControlLabel
                  value='male'
                  control={<Radio />}
                  label='Male'
                />
              </RadioGroup>
            </FormControl>
          </RadioWrapper>
          <SelectWrapper>
            <FormControl style={{ width: '400px' }}>
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
        </RadioSelectWrapper>
        <ButtonWrapper>
          <Button color='primary' variant='contained' size='large'>
            Create
          </Button>
        </ButtonWrapper>
      </Box>
    </Container>
  )
}

export default NewUser

const Container = styled.div`
  flex: 4;
  padding: 10px;
`

const Title = styled.h1`
  margin: 10px;
`

const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const FormLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const FormRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const RadioSelectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const RadioWrapper = styled.div`
  flex: 1;
  margin: 8px;
  min-width: 400px;
`

const SelectWrapper = styled.div`
  flex: 1;
  margin: 8px;
`

const ButtonWrapper = styled.div`
  margin: 10px 0;
`
