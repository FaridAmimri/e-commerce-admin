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
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage'
import app from '../firebase'
import { addProduct } from '../redux/apiCalls'
import { useDispatch } from 'react-redux'

function NewProduct() {
  const [inputs, setInputs] = useState({})
  const [categories, setCategories] = useState([])
  const [inStock, setInStock] = useState('true')
  const [file, setFile] = useState(null)
  const dispatch = useDispatch()

  const handleInputs = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleCategories = (e) => {
    setCategories(e.target.value.split(','))
  }

  const handleStock = (e) => {
    setInStock(e.target.value)
  }

  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

  const handleClick = (e) => {
    e.preventDefault()
    const fileName = file.name
    const storage = getStorage(app)
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file)

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + progress + '% done')
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused')
            break
          case 'running':
            console.log('Upload is running')
            break
          default:
        }
      },
      (error) => {
        console.log(error)
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            image: downloadURL,
            categories,
            inStock
          }
          console.log(product)
          addProduct(product, dispatch)
        })
      }
    )
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
        <FormWrapper>
          <TextField
            name='title'
            label='Title'
            placeholder='Title'
            variant='outlined'
            style={{ margin: '15px 0' }}
            onChange={handleInputs}
          />
          <TextField
            name='description'
            label='Description'
            placeholder='Description'
            variant='outlined'
            style={{ margin: '15px 0', width: '400px' }}
            onChange={handleInputs}
          />
          <TextField
            name='price'
            label='Price'
            placeholder='30'
            type='number'
            variant='outlined'
            style={{ margin: '15px 0', width: '150px' }}
            onChange={handleInputs}
          />
          <TextField
            label='Categories'
            placeholder='Girl, Boy'
            type='text'
            variant='outlined'
            style={{ margin: '15px 0', width: '150px' }}
            onChange={handleCategories}
          />
          <FormControl style={{ margin: '15px 0', width: '150px' }}>
            <InputLabel id='select'>inStock</InputLabel>
            <Select
              name='inStock'
              labelId='select'
              id='select'
              value={inStock}
              label='inStock'
              onChange={handleStock}
            >
              <MenuItem value='true'>Yes</MenuItem>
              <MenuItem value='false'>No</MenuItem>
            </Select>
          </FormControl>
          <Button
            color='primary'
            variant='contained'
            size='large'
            style={{ margin: '15px 0', width: '150px' }}
            onClick={handleClick}
          >
            Create
          </Button>
        </FormWrapper>

        <FileWrapper>
          <Avatar src='' sx={{ width: 100, height: 100 }} />
          <input
            accept='image/*'
            style={{ display: 'none' }}
            id='file'
            type='file'
            onChange={handleFile}
          />
          <label htmlFor='file'>
            <Button variant='outlined' component='span' size='small'>
              <UploadFileIcon />
              Choose File
            </Button>
          </label>
        </FileWrapper>
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
    justify-content: space-between;
  }
`

const Title = styled.h1`
  margin: 10px;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const FileWrapper = styled.div`
  display: flex;
  align-items: center;
  label {
    margin-left: 15px;
  }
`
