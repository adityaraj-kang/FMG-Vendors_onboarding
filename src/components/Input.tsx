import React from 'react'
import { cn } from '../utils/cn'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    helperText?: string
    error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, helperText, error, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-[var(--space-1)] w-full">
                {label && (
                    <label className="text-[12px] font-medium uppercase tracking-wider text-[var(--text-muted)] font-mono">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={cn(
                        'h-[48px] px-[var(--space-2)] bg-[var(--bg-input)] border border-[var(--border-subtle)] rounded-[var(--radius-sm)]',
                        'text-[var(--text-primary)] font-ui outline-none transition-all',
                        'focus:border-[var(--primary-main)] focus:ring-1 focus:ring-[var(--primary-main)]',
                        error && 'border-[var(--status-error)] focus:border-[var(--status-error)] focus:ring-[var(--status-error)]',
                        className
                    )}
                    {...props}
                />
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
)

Input.displayName = 'Input'

export default Input
