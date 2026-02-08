import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '../utils/cn'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'
    size?: 'standard' | 'dense'
    children: React.ReactNode
    isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'standard', children, isLoading, ...props }, ref) => {
        const variants = {
            primary: 'bg-[var(--primary-main)] text-[var(--text-inverse)] hover:bg-[var(--primary-hover)] active:bg-[var(--primary-pressed)]',
            secondary: 'bg-transparent border border-[var(--border-strong)] text-[var(--text-primary)] hover:bg-[var(--primary-dim)] hover:border-[var(--border-strong)]',
            ghost: 'bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-input)]',
            destructive: 'bg-[var(--status-error)] text-[var(--text-inverse)] hover:opacity-90',
        }

        const sizes = {
            standard: 'h-[48px] px-[var(--space-3)]',
            dense: 'h-[40px] px-[var(--space-2)] text-[14px]',
        }

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.1, ease: [0.2, 0, 0.38, 0.9] }} // Mechanical Snap
                className={cn(
                    'flex items-center justify-center rounded-[var(--radius-sm)] font-semibold tracking-[0.02em] transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
                    variants[variant],
                    sizes[size],
                    isLoading && 'opacity-70',
                    className
                )}
                style={{
                    fontFamily: 'var(--font-ui)',
                    ...props.style
                }}
                {...props}
            >
                {isLoading ? (
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    >
                        ...
                    </motion.div>
                ) : children}
            </motion.button>
        )
    }
)

Button.displayName = 'Button'

export default Button
