import React, { useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

const colors = scaleOrdinal(schemeCategory10).range();

const data = [
    {
        name: "Dessert",
        sold: 30,
       
    },
    {
        name: "Pizza",
        sold: 35,
       
    },
    {
        name: "Salad",
        sold: 20,
       
    },
    {
        name: "Soup",
        sold: 25,
     
    }
];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3
        } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width
        }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Chart = () => {
    const [cellHovered, setCellHovered] = useState(null);
    return (
        <BarChart
            width={580}
            height={420}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
                dataKey="sold"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={cellHovered === index ? "#8884d8" : colors[index % 20]}
                        onMouseEnter={() => setCellHovered(index)}
                        onMouseLeave={() => setCellHovered(null)} />
                ))}
            </Bar>
            <Legend />
        </BarChart>
    )
}

export default Chart;