import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts'

export default function Chart({ titel, data, dataKey }) {
    return (
        <div className='chart'>
            <h3 className='chartTitel'>{titel}</h3>
            <ResponsiveContainer width='100%' aspect={4}>
                <LineChart data={data}>
                    <XAxis dataKey={"name"} stroke='#5550bd' />
                    <Line dataKey={"Sale"} stroke='#5550bd' />
                    <Tooltip />
                    <CartesianGrid stroke='#e0dfdf' strokeDasharray={"8"} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
