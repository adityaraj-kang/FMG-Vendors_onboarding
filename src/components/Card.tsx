import React from 'react'
import { cn } from '../utils/cn'

interface CardProps {
    children: React.ReactNode
    className?: string
    variant?: 'default' | 'elevated' | 'lead'
}

const Card: React.FC<CardProps> = ({ children, className, variant = 'default' }) => {
    return (
        <div
            className={cn(
                'bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-[var(--space-3)]',
                variant === 'elevated' && 'shadow-[var(--shadow-md)]',
                variant === 'lead' && 'border-l-4 border-l-[var(--primary-main)]',
                className
            )}
        >
            {children}
        </div>
    )
}

export default Card
