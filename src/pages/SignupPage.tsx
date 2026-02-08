import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import Card from '../components/Card'
import Input from '../components/Input'
import Button from '../components/Button'
import { GoogleLogo, AppleLogo } from '@phosphor-icons/react'

import { motion } from 'framer-motion'
import { cn } from '../utils/cn'

export default function SignupPage() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [isShaking, setIsShaking] = useState(false)
    const [formData, setFormData] = useState({
        businessEmail: '',
        password: '',
        confirmPassword: ''
    })

    const triggerShake = () => {
        setIsShaking(true)
        setTimeout(() => setIsShaking(false), 500)
    }

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault()

        // Mock validation
        if (!formData.businessEmail || !formData.password || formData.password !== formData.confirmPassword) {
            triggerShake()
            return
        }

        setIsLoading(true)
        // Mock account creation delay
        setTimeout(() => {
            setIsLoading(false)
            navigate('/onboarding')
        }, 2000)
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
            title="Join Us"
            subtitle="Create your account to start receiving orders."
        >
            <Card className={cn("flex flex-col gap-[var(--space-4)]", isShaking && "refusal-shake")}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-[var(--space-4)]"
                >
                    {/* Social Signups */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-[var(--space-3)]">
                        <Button
                            variant="secondary"
                            className="w-full flex items-center justify-center gap-2"
                            onClick={() => { }}
                        >
                            <GoogleLogo size={20} weight="bold" />
                            Sign up with Google
                        </Button>
                        <Button
                            variant="secondary"
                            className="w-full flex items-center justify-center gap-2"
                            onClick={() => { }}
                        >
                            <span className="flex items-center justify-center w-5 h-5">
                                <AppleLogo size={20} weight="fill" className="mb-0.5" />
                            </span>
                            Sign up with Apple
                        </Button>
                    </motion.div>

                    <motion.div variants={itemVariants} className="auth-divider">
                        <span>OR</span>
                    </motion.div>

                    <motion.form
                        variants={itemVariants}
                        onSubmit={handleSignup}
                        className="flex flex-col gap-[var(--space-4)]"
                    >
                        <Input
                            label="EMAIL ADDRESS"
                            type="email"
                            placeholder="name@company.com"
                            value={formData.businessEmail}
                            onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                            required
                        />
                        <Input
                            label="PASSWORD"
                            type="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                        <Input
                            label="CONFIRM PASSWORD"
                            type="password"
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            required
                        />

                        <Button
                            type="submit"
                            isLoading={isLoading}
                            className="w-full"
                        >
                            {isLoading ? 'Creating Account...' : 'Create Account'}
                        </Button>
                    </motion.form>

                    <motion.div
                        variants={itemVariants}
                        className="text-center pt-[var(--space-2)] border-t border-[var(--border-subtle)]"
                    >
                        <p className="text-[12px] text-[var(--text-body)]">
                            Already have an account?{' '}
                            <Link to="/login" className="text-[var(--primary-main)] font-bold hover:underline">
                                Sign In
                            </Link>
                        </p>
                    </motion.div>
                </motion.div>
            </Card>
        </AuthLayout>
    )
}
