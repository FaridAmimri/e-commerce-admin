/** @format */

import styled from 'styled-components'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import LanguageIcon from '@mui/icons-material/Language'
import SettingsIcon from '@mui/icons-material/Settings'
import Avatar from '@mui/material/Avatar'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>BiBi.</Logo>
        </Left>
        <Right>
          <Icons>
            <Badge badgeContent={4} color='error'>
              <NotificationsNoneIcon />
            </Badge>
            <Badge badgeContent={2} color='error'>
              <LanguageIcon />
            </Badge>
            <SettingsIcon />
            <Link to='/login'>
              <Avatar sx={{ width: 24, height: 24, bgcolor: 'green' }} />
            </Link>
          </Icons>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`

const Wrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div``

const Right = styled.div`
  width: 140px;
`

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: #1565c0;
  cursor: pointer;
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #555;
`
