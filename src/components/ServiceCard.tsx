import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../utils/cn'

interface ServiceCardProps {
    label: string
    icon: React.ReactNode
    selected?: boolean
    onClick?: () => void
}

const ServiceCard: React.FC<ServiceCardProps> = ({ label, icon, selected, onClick }) => {
    return (
        <motion.div
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.1, ease: [0.2, 0, 0.38, 0.9] }} // Mechanical Snap
            onClick={onClick}
            className={cn(
                'flex flex-col items-center justify-center gap-[var(--space-2)] p-[var(--space-2)]',
                'bg-[var(--bg-surface)] border rounded-[var(--radius-md)] cursor-pointer transition-all h-[120px]',
                selected
                    ? 'border-[var(--primary-main)] bg-[var(--primary-dim)]'
                    : 'border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
            )}
        >
            <div className={cn(
                'text-[24px]',
                selected ? 'text-[var(--primary-main)]' : 'text-[var(--text-body)]'
            )}>
                {icon}
            </div>
            <span className={cn(
                'text-[12px] font-semibold text-center uppercase tracking-tight font-ui',
                selected ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'
            )}>
                {label}
            </span>
        </motion.div>
    )
}

export default ServiceCard
