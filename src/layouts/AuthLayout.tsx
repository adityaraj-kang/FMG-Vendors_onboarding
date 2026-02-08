import { ReactNode } from 'react'
import { motion } from 'framer-motion'


import logo from '../assets/logo.png'
import ThemeToggle from '../components/ThemeToggle'

interface AuthLayoutProps {
    children: ReactNode
    title: string
    subtitle: string
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
    return (
        <div className="app-container relative">
            {/* Terminal Background Effects */}
            <div className="terminal-grid" />
            <div className="scanline" />

            {/* Sticky Navigation Bar - Matches OnboardingPage */}
            {/* Sticky Navigation Bar - Matches OnboardingPage */}
            <header className="app-header">
                <img src={logo} alt="GENIE" className="h-8 w-auto logo-img" />
                <ThemeToggle />
            </header>

            <main className="app-main flex items-center justify-center p-[var(--space-4)]">
                <div className="w-full max-w-[400px] flex flex-col gap-[var(--space-6)] relative z-10 transition-all duration-500 ease-snap">
                    <header className="flex flex-col items-center text-center gap-[var(--space-2)]">
                        <div>
                            <h1 className="text-heading-1 uppercase tracking-tight">{title}</h1>
                            <p className="text-body-base text-[var(--text-body)] mt-1">{subtitle}</p>
                        </div>
                    </header>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: [0.2, 0, 0.38, 0.9] }}
                    >
                        {children}
                    </motion.div>

                    <footer className="text-center text-[10px] text-[var(--text-muted)] font-mono uppercase tracking-widest opacity-50">
                        FMG Vendor Portal
                    </footer>
                </div>
            </main>
        </div>
    )
}
