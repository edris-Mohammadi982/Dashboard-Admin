import React from 'react'
import Feature from '../../components/features/feature'
import Chart from '../../components/chart/Chart'
import { xAxisData } from '../../data'
import "./Home.css"

export default function Home() {
  return (
    <div className='home'>
      <Feature />
      <Chart titel="Month Sale" data={xAxisData} grid />
    </div>
  )
}
