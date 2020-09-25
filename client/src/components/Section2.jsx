import React, { useEffect, useState } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, Brush, ResponsiveContainer
} from 'recharts';


const Section2 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await (await fetch('https://api.bluecitytechnology.com/s/smp/')).json();
            let temp = []

            for (const key in res?.data) {
                const element = res?.data[key]
                temp.push({ name: key, ...element });
            }

            setData(temp)

        })()
    }, [])

    return (
        <ResponsiveContainer width='100%' height={700}>
            <BarChart
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                < Tooltip />
                <Legend />
                <Bar dataKey="ne" fill="#8884d8" />
                <Bar dataKey="ns" fill="pink" />
                <Bar dataKey="nw" fill="red" />
                <Bar dataKey="nrl" fill="yellow" />
                <Bar dataKey="nlr" fill="#82ca9d" />
                <ReferenceLine y={0} stroke='#000' />
                < Brush dataKey='name' height={30} stroke="#8884d8" />
            </BarChart >
        </ResponsiveContainer >
    )
}


export default Section2
