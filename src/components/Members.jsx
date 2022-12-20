/** @format */

import styled from 'styled-components'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useState, useEffect } from 'react'
import { userRequest } from '../requests'

function Members() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get('users')
        setUsers(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
  }, [])

  return (
    <Container>
      <Title>New join Members</Title>
      <List>
        {users.map((user) => (
          <User key={user._id}>
            <Avatar src={user.image || ''} sx={{ width: 30, height: 30 }} />
            <Details>
              <Username>{user.username}</Username>
            </Details>
            <Button
              color='primary'
              variant='outlined'
              size='small'
              startIcon={<VisibilityIcon />}
            >
              Display
            </Button>
          </User>
        ))}
      </List>
    </Container>
  )
}

export default Members

const Container = styled.div`
  flex: 1;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-right: 20px;
`

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const User = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
`

const Username = styled.span`
  font-weight: 600;
`
