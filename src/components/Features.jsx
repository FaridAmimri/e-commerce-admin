/** @format */

import styled from 'styled-components'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

function Features() {
  return (
    <Container>
      <Item>
        <Title>Revenue</Title>
        <Money>
          <Amount>2200 €</Amount>
          <Rate>
            -12,5 <ArrowDownwardIcon className='negative' />
          </Rate>
        </Money>
        <Subtitle>Compared to last month</Subtitle>
      </Item>
      <Item>
        <Title>Sales</Title>
        <Money>
          <Amount>1700 €</Amount>
          <Rate>
            -9,4 <ArrowDownwardIcon className='negative' />
          </Rate>
        </Money>
        <Subtitle>Compared to last month</Subtitle>
      </Item>
      <Item>
        <Title>Cost</Title>
        <Money>
          <Amount>3400 €</Amount>
          <Rate>
            +6,8 <ArrowUpwardIcon />
          </Rate>
        </Money>
        <Subtitle>Compared to last month</Subtitle>
      </Item>
    </Container>
  )
}

export default Features

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px 10px 10px;
`

const Item = styled.div`
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

const Title = styled.h3`
  font-size: 20px;
`

const Money = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`

const Amount = styled.span`
  font-size: 30px;
  font-weight: 600;
`

const Rate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
  svg {
    font-size: 14px;
    margin-left: 5px;
    color: green;
  }
  .negative {
    color: red;
  }
`

const Subtitle = styled.span`
  font-size: 15px;
  color: gray;
`
