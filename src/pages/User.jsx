/** @format */

import styled from 'styled-components'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'

function User() {
  return (
    <Container>
      <Header>
        <TitleHeader>Edit User</TitleHeader>
        <Link to='/newUser'>
          <Button color='primary' variant='contained' size='small'>
            Create
          </Button>
        </Link>
      </Header>

      <UserWrapper>
        <Left>
          <Top>
            <Avatar src='' sx={{ width: 32, height: 32 }} />
            <Details>
              <Identity>Farid Amimri</Identity>
              <Job>Software Engineer</Job>
            </Details>
          </Top>
          <Bottom>
            <TitleBottom>Acount Details</TitleBottom>
            <Info>
              <PermIdentityIcon />
              <Detail>faridamimri</Detail>
            </Info>
            <Info>
              <CalendarTodayIcon />
              <Detail>26.06.1989</Detail>
            </Info>
            <TitleBottom>Contact Details</TitleBottom>
            <Info>
              <PhoneIphoneIcon />
              <Detail>+33 6 40 40 82 05</Detail>
            </Info>
            <Info>
              <MailOutlineIcon />
              <Detail>farid.amimri@gmail.com</Detail>
            </Info>
            <Info>
              <LocationOnIcon />
              <Detail>Paris, France</Detail>
            </Info>
          </Bottom>
        </Left>

        <Right>
          <TitleRight>Edit</TitleRight>
          <ProfilWrapper>
            <ProfilForm>
              <Box
                component='form'
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '220px' }
                }}
              >
                <Inputs>
                  <TextField
                    label='Username'
                    placeholder='faridamimri'
                    size='small'
                    variant='standard'
                  />
                  <TextField
                    label='BirthDay'
                    placeholder='26.06.1989'
                    size='small'
                    variant='standard'
                  />
                  <TextField
                    label='Phone Number'
                    placeholder='+33 6 40 40 82 05'
                    size='small'
                    variant='standard'
                  />
                  <TextField
                    label='Email'
                    placeholder='farid.amimri@gmail.com'
                    size='small'
                    variant='standard'
                  />
                  <TextField
                    label='Address'
                    placeholder='Paris, France'
                    size='small'
                    variant='standard'
                  />
                </Inputs>
              </Box>
            </ProfilForm>

            <ProfilAvatar>
              <AvatarWrapper>
                <Avatar src='' sx={{ width: 100, height: 100 }} />
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
            </ProfilAvatar>
          </ProfilWrapper>
        </Right>
      </UserWrapper>
    </Container>
  )
}

export default User

const Container = styled.div`
  flex: 4;
  padding: 10px;
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

/****    USER WRAPPER  *****/

const UserWrapper = styled.div`
  display: flex;
`
/***  Left Wrapper  ***/
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const Top = styled.div`
  display: flex;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
`
const Identity = styled.span`
  font-weight: 600;
`
const Job = styled.span`
  font-weight: 300;
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
const TitleBottom = styled.h4`
  font-weight: 600;
  margin: 10px 0;
  color: gray;
`
const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`
const Detail = styled.span`
  margin-left: 10px;
`

/***  Right Wrapper  ***/
const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
`

const TitleRight = styled.h2`
  font-weight: 600;
`

const ProfilWrapper = styled.div`
  display: flex;
`

const ProfilForm = styled.div``

const Inputs = styled.div``

const ProfilAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  label {
    margin-left: 15px;
  }
`
