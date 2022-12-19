/** @format */

import styled from 'styled-components'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import BarChartIcon from '@mui/icons-material/BarChart'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import TimelineIcon from '@mui/icons-material/Timeline'
import ReportIcon from '@mui/icons-material/Report'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <Link to='/'>
              <Item className='active'>
                <LineStyleIcon />
                Home
              </Item>
            </Link>
            <Item>
              <AnalyticsIcon />
              Analytics
            </Item>
            <Item>
              <TrendingUpIcon />
              Sales
            </Item>
          </List>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <List>
            <Link to='/users'>
              <Item>
                <PeopleAltOutlinedIcon />
                Users
              </Item>
            </Link>
            <Link to='/products'>
              <Item>
                <StorefrontIcon />
                Products
              </Item>
            </Link>
            <Item>
              <AttachMoneyIcon />
              Transactions
            </Item>
            <Item>
              <BarChartIcon />
              Reports
            </Item>
          </List>
        </Menu>
        <Menu>
          <Title>Notifications</Title>
          <List>
            <Item>
              <MailOutlinedIcon />
              Mail
            </Item>
            <Item>
              <DynamicFeedIcon />
              Feedback
            </Item>
            <Item>
              <ChatBubbleOutlineIcon />
              Messages
            </Item>
          </List>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <List>
            <Item>
              <WorkOutlineIcon />
              Manage
            </Item>
            <Item>
              <TimelineIcon />
              Analytics
            </Item>
            <Item>
              <ReportIcon />
              Reports
            </Item>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  flex: 1;
  width: 150px;
  height: calc(100vh - 40px);
  background-color: #fbfbfb;
  position: sticky;
  top: 50px;
  padding: 10px;
`

const Wrapper = styled.div`
  color: #555;
`

const Menu = styled.div`
  margin-bottom: 10px;
`

const Title = styled.h3`
  font-size: 13px;
  color: #9393f4;
`

const List = styled.ul`
  list-style: none;
  padding: 5px;
  a {
    text-decoration: none;
    color: inherit;
  }
  .active {
    background-color: rgb(240, 240, 255);
  }
`

const Item = styled.li`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  :hover {
    background-color: rgb(240, 240, 255);
  }
  svg {
    margin-right: 5px;
    font-size: 20px;
  }
`
