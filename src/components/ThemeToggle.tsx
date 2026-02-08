import { useTheme } from '../contexts/ThemeContext'
import { Sun, Moon } from '@phosphor-icons/react'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-[var(--radius-full)] text-[var(--text-muted)] hover:text-[var(--primary-main)] hover:bg-[var(--primary-dim)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary-glow)]"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? (
                <Moon size={20} weight="bold" />
            ) : (
                <Sun size={20} weight="bold" />
            )}
        </button>
    )
}
