import React from 'react'
import { cn } from '../utils/cn'

interface DaySchedule {
    day: string
    available: boolean
    start: string
    end: string
}

interface AvailabilityPickerProps {
    schedule: DaySchedule[]
    onChange: (schedule: DaySchedule[]) => void
}

import TimePicker from './TimePicker'

const AvailabilityPicker: React.FC<AvailabilityPickerProps> = ({ schedule, onChange }) => {
    const toggleDay = (index: number) => {
        const newSchedule = [...schedule]
        newSchedule[index].available = !newSchedule[index].available
        onChange(newSchedule)
    }

    const updateTime = (index: number, field: 'start' | 'end', value: string) => {
        const newSchedule = [...schedule]
        newSchedule[index][field] = value
        onChange(newSchedule)
    }

    return (
        <div className="flex flex-col gap-[var(--space-2)]">
            {schedule.map((item, index) => (
                <div
                    key={item.day}
                    className={cn(
                        'flex flex-col md:flex-row md:items-center justify-between p-[var(--space-3)] rounded-[var(--radius-sm)] border transition-all gap-[var(--space-2)]',
                        item.available ? 'bg-[var(--bg-surface)] border-[var(--border-subtle)]' : 'bg-transparent border-dashed border-[var(--border-subtle)] opacity-50'
                    )}
                >
                    <div className="flex items-center gap-[var(--space-3)]">
                        <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-[var(--border-subtle)] bg-[var(--bg-default)] text-[var(--primary-main)] focus:ring-[var(--primary-main)] accent-[var(--primary-main)] cursor-pointer"
                            checked={item.available}
                            onChange={() => toggleDay(index)}
                        />
                        <span className="text-[14px] font-bold text-[var(--text-primary)] uppercase font-mono tracking-tighter">
                            {item.day}
                        </span>
                    </div>

                    <div className="flex items-center gap-[var(--space-2)] flex-wrap">
                        {item.available ? (
                            <div className="flex items-center gap-1">
                                <TimePicker
                                    value={item.start}
                                    disabled={!item.available}
                                    onChange={(val) => updateTime(index, 'start', val)}
                                />
                                <span className="text-[var(--text-muted)] text-[10px] font-mono">TO</span>
                                <TimePicker
                                    value={item.end}
                                    disabled={!item.available}
                                    onChange={(val) => updateTime(index, 'end', val)}
                                />
                            </div>
                        ) : (
                            <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Unavailable</span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AvailabilityPicker
