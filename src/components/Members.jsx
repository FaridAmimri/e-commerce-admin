/** @format */

import styled from 'styled-components'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import VisibilityIcon from '@mui/icons-material/Visibility'

function Members() {
  return (
    <Container>
      <Title>New join Members</Title>
      <List>
        <User>
          <Avatar
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            sx={{ width: 30, height: 30 }}
          />
          <Details>
            <Username>Anna Keller</Username>
            <Job>Software Engineer</Job>
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
        <User>
          <Avatar
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            sx={{ width: 30, height: 30 }}
          />
          <Details>
            <Username>Anna Keller</Username>
            <Job>Software Engineer</Job>
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
        <User>
          <Avatar
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            sx={{ width: 30, height: 30 }}
          />
          <Details>
            <Username>Anna Keller</Username>
            <Job>Software Engineer</Job>
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
        <User>
          <Avatar
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            sx={{ width: 30, height: 30 }}
          />
          <Details>
            <Username>Anna Keller</Username>
            <Job>Software Engineer</Job>
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
        <User>
          <Avatar
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            sx={{ width: 30, height: 30 }}
          />
          <Details>
            <Username>Anna Keller</Username>
            <Job>Software Engineer</Job>
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

const Job = styled.span`
  font-weight: 300;
  font-size: 14px;
`
