import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import Card from '../components/Card'
import Input from '../components/Input'
import Button from '../components/Button'
import { GoogleLogo, AppleLogo } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { cn } from '../utils/cn'

export default function LoginPage() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [isShaking, setIsShaking] = useState(false)
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const triggerShake = () => {
        setIsShaking(true)
        setTimeout(() => setIsShaking(false), 500)
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()

        // Mock validation
        if (!credentials.email || !credentials.password) {
            triggerShake()
            return
        }

        setIsLoading(true)
        // Mock authentication delay
        setTimeout(() => {
            setIsLoading(false)
            navigate('/onboarding')
        }, 1500)
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { ease: [0.2, 0, 0.38, 0.9] }
        }
    }

    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Sign in to manage your business and orders."
        >
            <Card className={cn("flex flex-col gap-[var(--space-4)]", isShaking && "refusal-shake")}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-[var(--space-4)]"
                >
                    {/* Social Logins */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-[var(--space-3)]">
                        <Button
                            variant="secondary"
                            className="w-full flex items-center justify-center gap-2"
                            onClick={() => { }}
                        >
                            <GoogleLogo size={20} weight="bold" />
                            Continue with Google
                        </Button>
                        <Button
                            variant="secondary"
                            className="w-full flex items-center justify-center gap-2"
                            onClick={() => { }}
                        >
                            <span className="flex items-center justify-center w-5 h-5">
                                <AppleLogo size={20} weight="fill" className="mb-0.5" />
                            </span>
                            Continue with Apple
                        </Button>
                    </motion.div>

                    <motion.div variants={itemVariants} className="auth-divider">
                        <span>OR</span>
                    </motion.div>

                    <motion.form
                        variants={itemVariants}
                        onSubmit={handleLogin}
                        className="flex flex-col gap-[var(--space-4)]"
                    >
                        <Input
                            label="EMAIL ADDRESS"
                            type="email"
                            placeholder="name@company.com"
                            value={credentials.email}
                            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                            required
                        />
                        <div className="flex flex-col gap-1">
                            <Input
                                label="PASSWORD"
                                type="password"
                                placeholder="••••••••"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                required
                            />
                            <div className="flex justify-end">
                                <button type="button" className="text-[10px] text-[var(--text-muted)] hover:text-[var(--primary-main)] transition-colors font-mono uppercase">
                                    Forgot Password?
                                </button>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            isLoading={isLoading}
                            className="w-full"
                        >
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </motion.form>

                    <motion.div
                        variants={itemVariants}
                        className="text-center pt-[var(--space-2)] border-t border-[var(--border-subtle)]"
                    >
                        <p className="text-[12px] text-[var(--text-body)]">
                            New here?{' '}
                            <Link to="/signup" className="text-[var(--primary-main)] font-bold hover:underline">
                                Create an account
                            </Link>
                        </p>
                    </motion.div>
                </motion.div>
            </Card>
        </AuthLayout>
    )
}
