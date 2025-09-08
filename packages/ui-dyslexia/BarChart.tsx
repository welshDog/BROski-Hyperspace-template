"use client";

import React from 'react';

interface ChartData {
    label: string;
    value: number;
    color?: string;
}

interface BarChartProps {
    data: ChartData[];
    width?: number;
    height?: number;
    className?: string;
}

export function BarChart({ data, width = 400, height = 200, className }: BarChartProps) {
    const maxValue = Math.max(...data.map(item => item.value));
    const barWidth = (width - 40) / data.length;
    const padding = 20;

    return (
        <div className={`animate-fade-in ${className || ''}`}>
            <svg width={width} height={height} className="overflow-visible">
                {/* Y-axis labels */}
                {[0, 25, 50, 75, 100].map(percent => {
                    const y = height - padding - (percent / 100) * (height - 2 * padding);
                    return (
                        <g key={percent}>
                            <text
                                x={padding - 10}
                                y={y + 4}
                                textAnchor="end"
                                className="text-xs fill-gray-600 dark:fill-gray-400"
                            >
                                {percent}%
                            </text>
                            <line
                                x1={padding}
                                y1={y}
                                x2={width - padding}
                                y2={y}
                                stroke="currentColor"
                                strokeOpacity={0.2}
                                className="text-gray-300 dark:text-gray-600"
                            />
                        </g>
                    );
                })}

                {/* Bars */}
                {data.map((item, index) => {
                    const barHeight = (item.value / maxValue) * (height - 2 * padding);
                    const x = padding + index * barWidth + 5;
                    const y = height - padding - barHeight;

                    return (
                        <g key={item.label}>
                            <rect
                                x={x}
                                y={y}
                                width={barWidth - 10}
                                height={barHeight}
                                fill={item.color || `hsl(${(index * 360) / data.length}, 70%, 50%)`}
                                className="hover:opacity-80 transition-opacity cursor-pointer"
                                rx={4}
                            />
                            <text
                                x={x + (barWidth - 10) / 2}
                                y={y - 5}
                                textAnchor="middle"
                                className="text-xs fill-gray-700 dark:fill-gray-300 font-medium"
                            >
                                {item.value}
                            </text>
                        </g>
                    );
                })}

                {/* X-axis labels */}
                {data.map((item, index) => {
                    const x = padding + index * barWidth + (barWidth - 10) / 2;
                    return (
                        <text
                            key={item.label}
                            x={x}
                            y={height - 5}
                            textAnchor="middle"
                            className="text-xs fill-gray-600 dark:fill-gray-400"
                        >
                            {item.label}
                        </text>
                    );
                })}
            </svg>
        </div>
    );
}
