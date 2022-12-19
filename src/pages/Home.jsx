/** @format */

import styled from 'styled-components'
import { userData } from '../data'
import Features from '../components/Features'
import Chart from '../components/Chart'
import Members from '../components/Members'
import Transactions from '../components/Transactions'

function Home() {
  return (
    <Container>
      <Features />
      <ChartWrapper>
        <Chart
          className='chart'
          data={userData}
          title='User Analytics'
          dataKey='Active User'
          grid
        />
      </ChartWrapper>
      <Widgets>
        <Members />
        <Transactions />
      </Widgets>
    </Container>
  )
}

export default Home

const Container = styled.div`
  flex: 4;
`

const ChartWrapper = styled.div`
  width: 98%;
`

const Widgets = styled.div`
  display: flex;
  margin: 20px 0 20px 20px;
  width: 96%;
`
