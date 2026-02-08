import { useState, useRef, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CaretDown, Check, MagnifyingGlass } from '@phosphor-icons/react'
import { cn } from '../utils/cn'

interface Option {
    value: string
    label: string
}

interface SelectProps {
    label?: string
    helperText?: string
    error?: boolean
    options: Option[]
    value: string
    onChange: (value: string) => void
    placeholder?: string
    className?: string
    searchable?: boolean
    searchPlaceholder?: string
}

export default function Select({
    label,
    helperText,
    error,
    options,
    value,
    onChange,
    placeholder = 'Select option...',
    className,
    searchable = false,
    searchPlaceholder = 'Search...'
}: SelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const containerRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)

    const selectedOption = options.find(opt => opt.value === value)

    const filteredOptions = useMemo(() => {
        if (!searchable || !searchQuery) return options
        return options.filter(opt =>
            opt.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [options, searchQuery, searchable])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    useEffect(() => {
        if (!isOpen) {
            setSearchQuery('')
        } else if (searchable && searchInputRef.current) {
            // Short delay to ensure dropdown is animated in before focusing
            setTimeout(() => searchInputRef.current?.focus(), 100)
        }
    }, [isOpen, searchable])

    return (
        <div className={cn("flex flex-col gap-[var(--space-1)] w-full relative", className)} ref={containerRef}>
            {label && (
                <label className="text-[12px] font-medium uppercase tracking-wider text-[var(--text-muted)] font-mono">
                    {label}
                </label>
            )}

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    'h-[48px] w-full px-[var(--space-3)] bg-[var(--bg-input)] border border-[var(--border-subtle)] rounded-[var(--radius-sm)]',
                    'text-[var(--text-primary)] font-ui outline-none transition-all flex items-center justify-between gap-2',
                    'hover:border-[var(--border-strong)]',
                    isOpen && 'border-[var(--primary-main)] ring-1 ring-[var(--primary-main)]',
                    error && 'border-[var(--status-error)]',
                )}
            >
                <span className={cn("truncate", !selectedOption && "text-[var(--text-muted)]")}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <CaretDown
                    size={16}
                    className={cn("text-[var(--text-muted)] transition-transform duration-200", isOpen && "rotate-180 text-[var(--primary-main)]")}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-[calc(100%+4px)] left-0 w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-sm)] shadow-[var(--shadow-xl)] z-[var(--z-dropdown)] flex flex-col overflow-hidden"
                    >
                        {searchable && (
                            <div className="p-2 border-b border-[var(--border-subtle)] bg-[var(--bg-input)] flex items-center gap-2">
                                <MagnifyingGlass size={16} className="text-[var(--text-muted)]" />
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={searchPlaceholder}
                                    className="bg-transparent border-none outline-none text-[13px] font-ui text-[var(--text-primary)] w-full w-full"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Escape') setIsOpen(false)
                                    }}
                                />
                            </div>
                        )}
                        <div className="max-h-[200px] overflow-y-auto custom-scrollbar py-1">
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => {
                                            onChange(opt.value)
                                            setIsOpen(false)
                                        }}
                                        className={cn(
                                            "w-full px-3 py-2 text-left text-[13px] font-ui transition-colors flex items-center justify-between",
                                            "hover:bg-[var(--primary-dim)] hover:text-[var(--primary-main)]",
                                            value === opt.value ? "text-[var(--primary-main)] bg-[var(--primary-dim)] font-bold" : "text-[var(--text-body)]"
                                        )}
                                    >
                                        <span>{opt.label}</span>
                                        {value === opt.value && <Check size={14} weight="bold" />}
                                    </button>
                                ))
                            ) : (
                                <div className="px-3 py-4 text-center text-[12px] text-[var(--text-muted)] font-mono uppercase">
                                    No results found
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {helperText && (
                <span className={cn(
                    'text-[12px] font-mono',
                    error ? 'text-[var(--status-error)]' : 'text-[var(--text-muted)]'
                )}>
                    {helperText}
                </span>
            )}
        </div>
    )
}

