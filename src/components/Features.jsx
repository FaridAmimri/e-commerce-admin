/** @format */

import styled from 'styled-components'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { useState, useEffect } from 'react'
import { userRequest } from '../requests'

function Features() {
  const [income, setIncome] = useState([])
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get('orders/income')
        setIncome(res.data)
        setPercentage(
          ((res.data[1].total - res.data[0].total) / res.data[0].total) * 100
        )
      } catch (error) {
        console.log(error)
      }
    }
    getIncome()
  }, [])

  return (
    <Container>
      <Item>
        <Title>Revenue</Title>
        {income.length > 0 ? (
          <Money>
            <Amount>{income[1].total * 0.6} €</Amount>
            <Rate>
              {Math.floor(percentage * 0.6)} %
              {percentage < 0 ? (
                <ArrowDownwardIcon className='negative' />
              ) : (
                <ArrowUpwardIcon className='positive' />
              )}
            </Rate>
          </Money>
        ) : (
          <span>Loading...</span>
        )}
        <Subtitle>Compared to last month</Subtitle>
      </Item>
      <Item>
        <Title>Sales</Title>
        {income.length > 0 ? (
          <Money>
            <Amount>{income[1].total} €</Amount>
            <Rate>
              {Math.floor(percentage)} %
              {percentage < 0 ? (
                <ArrowDownwardIcon className='negative' />
              ) : (
                <ArrowUpwardIcon className='positive' />
              )}
            </Rate>
          </Money>
        ) : (
          <span>Loading...</span>
        )}
        <Subtitle>Compared to last month</Subtitle>
      </Item>
      <Item>
        <Title>Cost</Title>
        {income.length > 0 ? (
          <Money>
            <Amount>{income[1].total * 0.4} €</Amount>
            <Rate>
              {Math.floor(percentage * 0.4)} %
              {percentage < 0 ? (
                <ArrowDownwardIcon className='negative' />
              ) : (
                <ArrowUpwardIcon className='positive' />
              )}
            </Rate>
          </Money>
        ) : (
          <span>Loading...</span>
        )}
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
  .positive {
    color: green;
  }
`

const Subtitle = styled.span`
  font-size: 15px;
  color: gray;
`
