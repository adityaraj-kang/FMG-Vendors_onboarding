import React from 'react'
import { cn } from '../utils/cn'

interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string
    value: string | number
    min?: number
    max?: number
    unit?: string
}

export default function Slider({ label, value, min = 0, max = 100, unit = '', className, ...props }: SliderProps) {
    const numValue = typeof value === 'string' ? parseFloat(value) : value
    const percentage = ((numValue - min) / (max - min)) * 100

    return (
        <div className="flex flex-col gap-[var(--space-1)] w-full">
            <div className="flex justify-between items-end mb-1">
                {label && (
                    <label className="text-[12px] font-medium uppercase tracking-wider text-[var(--text-muted)] font-mono">
                        {label}
                    </label>
                )}
                <span className="text-[14px] font-bold text-[var(--primary-main)] font-mono">
                    {value}{unit}
                </span>
            </div>

            {/* Custom slider with visible track */}
            <div className="relative w-full h-[20px] flex items-center">
                {/* Background track */}
                <div className="absolute left-0 right-0 h-[6px] bg-[var(--bg-input)] rounded-full" />

                {/* Filled track */}
                <div
                    className="absolute left-0 h-[6px] bg-[var(--primary-main)] rounded-full"
                    style={{ width: `${percentage}%` }}
                />

                {/* Native input (invisible, for interaction) */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    className={cn(
                        'absolute w-full h-full opacity-0 cursor-pointer z-10',
                        className
                    )}
                    {...props}
                />

                {/* Custom thumb */}
                <div
                    className="absolute w-[20px] h-[20px] bg-[var(--primary-main)] rounded-full border-2 border-[var(--bg-surface)] shadow-[var(--shadow-glow)] pointer-events-none transition-transform duration-100"
                    style={{
                        left: `calc(${percentage}% - 10px)`,
                    }}
                />
            </div>

            <div className="flex justify-between text-[10px] text-[var(--text-muted)] font-mono">
                <span>{min}{unit}</span>
                <span>{max}{unit}</span>
            </div>
        </div>
    )
}
