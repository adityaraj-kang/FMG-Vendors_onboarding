import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, CaretDown } from '@phosphor-icons/react'
import { cn } from '../utils/cn'

interface TimePickerProps {
    value: string // Format "HH:mm"
    onChange: (value: string) => void
    disabled?: boolean
}

export default function TimePicker({ value, onChange, disabled }: TimePickerProps) {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    // Convert HH:mm to 12h components
    const h24 = parseInt(value.split(':')[0])
    const mm = value.split(':')[1]
    const h12 = h24 === 0 ? 12 : h24 > 12 ? h24 - 12 : h24
    const period = h24 >= 12 ? 'PM' : 'AM'

    const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'))
    const minutes = ['00', '15', '30', '45']
    const periods = ['AM', 'PM']

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleSelect = (newH12: number, newMM: string, newPeriod: string) => {
        let h24Num = newH12
        if (newPeriod === 'PM' && newH12 !== 12) h24Num += 12
        if (newPeriod === 'AM' && newH12 === 12) h24Num = 0

        const h24Str = h24Num.toString().padStart(2, '0')
        onChange(`${h24Str}:${newMM}`)
    }

    return (
        <div className="relative" ref={containerRef}>
            <button
                type="button"
                disabled={disabled}
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "bg-[var(--bg-input)] text-[var(--text-primary)] font-mono text-[13px] px-3 py-1.5 rounded-[var(--radius-xs)] outline-none border border-[var(--border-subtle)] transition-all flex items-center gap-2 hover:border-[var(--border-strong)]",
                    isOpen && "border-[var(--primary-main)] ring-1 ring-[var(--primary-main)]",
                    disabled && "opacity-0 pointer-events-none"
                )}
            >
                <Clock size={14} className="text-[var(--text-muted)]" />
                <span>{h12.toString().padStart(2, '0')}:{mm} {period}</span>
                <CaretDown size={12} className={cn("text-[var(--text-muted)] transition-transform", isOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-[calc(100%+8px)] right-0 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-sm)] shadow-[var(--shadow-xl)] z-[var(--z-dropdown)] p-3 flex gap-4 min-w-[200px]"
                    >
                        {/* Hour Column */}
                        <div className="flex flex-col gap-1 flex-1">
                            <span className="text-[9px] font-mono text-[var(--text-muted)] uppercase mb-1">Hour</span>
                            <div className="flex flex-col max-h-[160px] overflow-y-auto custom-scrollbar pr-1">
                                {hours.map(h => (
                                    <button
                                        key={h}
                                        onClick={() => handleSelect(parseInt(h), mm, period)}
                                        className={cn(
                                            "text-[12px] font-mono p-1 rounded hover:bg-[var(--primary-dim)] hover:text-[var(--primary-main)]",
                                            parseInt(h) === h12 ? "bg-[var(--primary-dim)] text-[var(--primary-main)] font-bold" : "text-[var(--text-body)]"
                                        )}
                                    >
                                        {h}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Minute Column */}
                        <div className="flex flex-col gap-1 flex-1">
                            <span className="text-[9px] font-mono text-[var(--text-muted)] uppercase mb-1">Min</span>
                            <div className="flex flex-col gap-1">
                                {minutes.map(m => (
                                    <button
                                        key={m}
                                        onClick={() => handleSelect(h12, m, period)}
                                        className={cn(
                                            "text-[12px] font-mono p-1 rounded hover:bg-[var(--primary-dim)] hover:text-[var(--primary-main)]",
                                            m === mm ? "bg-[var(--primary-dim)] text-[var(--primary-main)] font-bold" : "text-[var(--text-body)]"
                                        )}
                                    >
                                        {m}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Period Column */}
                        <div className="flex flex-col gap-1 flex-1">
                            <span className="text-[9px] font-mono text-[var(--text-muted)] uppercase mb-1">Mdn</span>
                            <div className="flex flex-col gap-1">
                                {periods.map(p => (
                                    <button
                                        key={p}
                                        onClick={() => handleSelect(h12, mm, p)}
                                        className={cn(
                                            "text-[12px] font-mono p-1 rounded hover:bg-[var(--primary-dim)] hover:text-[var(--primary-main)]",
                                            p === period ? "bg-[var(--primary-dim)] text-[var(--primary-main)] font-bold" : "text-[var(--text-body)]"
                                        )}
                                    >
                                        {p}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
