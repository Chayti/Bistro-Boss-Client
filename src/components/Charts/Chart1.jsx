import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
    {
        name: "Dessert",
        sold: 30,
        items: 6
    },
    {
        name: "Pizza",
        sold: 35,
        items: 9
    },
    {
        name: "Salad",
        sold: 20,
        items: 8
    },
    {
        name: "Soup",
        sold: 25,
        items: 6
    }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div>
                <p style={{ color: "#fff", backgroundColor: "#333", padding: "5px" }}>{`${payload[0].name}`}</p>
                <hr />
                <p style={{ color: "#fff", backgroundColor: "#666", padding: "5px" }}>{`Available: ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};

const Chart1 = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <PieChart width={400} height={380}>
                <Legend align="center"
                    wrapperStyle={{ paddingTop: "4px", marginTop: "4px" }}
                    layout="horizontal"
                    verticalAlign="top"
                    iconSize={30}
                    iconType="diamond" />
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={130}
                    fill="#8884d8"
                    dataKey="items"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
            </PieChart>
        </div >
    )
}

export default Chart1;