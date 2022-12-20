/** @format */

import styled from 'styled-components'
import Features from '../components/Features'
import Chart from '../components/Chart'
import Members from '../components/Members'
import Transactions from '../components/Transactions'
import { useState, useMemo, useEffect } from 'react'
import { userRequest } from '../requests'

function Home() {
  const [userStats, setUserStats] = useState([])

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    []
  )

  useEffect(() => {
    const getUserStats = async () => {
      try {
        const res = await userRequest.get('users/statistics')
        res.data.map((item) =>
          setUserStats((prev) => [
            // take prev item, spread it and add new data
            ...prev,
            { name: MONTHS[item._id - 1], 'Active User': item.total }
          ])
        )
      } catch (error) {
        console.log(error)
      }
    }
    getUserStats()
  }, [MONTHS])

  return (
    <Container>
      <Features />
      <ChartWrapper>
        <Chart
          className='chart'
          data={userStats}
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
