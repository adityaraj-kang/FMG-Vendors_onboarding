import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Truck,
    Wrench,
    ThermometerHot,
    Lightning,
    Plant,
    Hammer,
    HouseLine,
    Bug,
    Key,
    Trash,
    Envelope,
    Phone,
    CheckCircle,
    Clock,
    MapPin,
    ChatCircleText
} from '@phosphor-icons/react'
import Button from '../components/Button'
import Input from '../components/Input'
import Select from '../components/Select'
import Slider from '../components/Slider'
import Card from '../components/Card'
import ServiceCard from '../components/ServiceCard'
import AvailabilityPicker from '../components/AvailabilityPicker'
import PhotoUpload from '../components/PhotoUpload'
import DocumentUpload from '../components/DocumentUpload'
import { US_STATES, COUNTRIES } from '../constants/locationData'
import { cn } from '../utils/cn'
import ThemeToggle from '../components/ThemeToggle'
import '../App.css'

const SERVICES = [
    { id: 'towing', label: 'Towing & Roadside', icon: <Truck weight="duotone" /> },
    { id: 'plumber', label: 'Plumber', icon: <Wrench weight="duotone" /> },
    { id: 'hvac', label: 'HVAC', icon: <ThermometerHot weight="duotone" /> },
    { id: 'electrician', label: 'Electrician', icon: <Lightning weight="duotone" /> },
    { id: 'lawn', label: 'Lawn Care', icon: <Plant weight="duotone" /> },
    { id: 'handyman', label: 'Handyman', icon: <Hammer weight="duotone" /> },
    { id: 'roofing', label: 'Roofing', icon: <HouseLine weight="duotone" /> },
    { id: 'pest', label: 'Pest Control', icon: <Bug weight="duotone" /> },
    { id: 'locksmith', label: 'Locksmith', icon: <Key weight="duotone" /> },
    { id: 'junk', label: 'Junk Removal', icon: <Trash weight="duotone" /> },
]

const DEFAULT_SCHEDULE = [
    { day: 'Monday', available: true, start: '09:00', end: '17:00' },
    { day: 'Tuesday', available: true, start: '09:00', end: '17:00' },
    { day: 'Wednesday', available: true, start: '09:00', end: '17:00' },
    { day: 'Thursday', available: true, start: '09:00', end: '17:00' },
    { day: 'Friday', available: true, start: '09:00', end: '17:00' },
    { day: 'Saturday', available: false, start: '09:00', end: '17:00' },
    { day: 'Sunday', available: false, start: '09:00', end: '17:00' },
]

import logo from '../assets/logo.png'

function App() {
    const [step, setStep] = useState(1)
    const [activeServiceIdx, setActiveServiceIdx] = useState(0)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [formData, setFormData] = useState({
        businessName: '',
        website: '',
        city: '',
        state: '',
        country: 'USA',
        zipCode: '',
        radius: '25',
        services: [] as string[],
        availability: {} as Record<string, typeof DEFAULT_SCHEDULE>,
        photos: [] as string[],
        documents: {
            insurance: null as string | null,
            license: null as string | null,
            tax: null as string | null,
            other: null as string | null
        },
        contactMethod: 'email',
        email: '',
        phone: '',
        maxJobs: '5',
        autoAccept: false
    })

    useEffect(() => {
        // Zip code is manually entered
    }, [])

    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }



    const toggleService = (serviceId: string) => {
        setFormData(prev => {
            const isSelected = prev.services.includes(serviceId)
            const newServices = isSelected
                ? prev.services.filter(id => id !== serviceId)
                : [...prev.services, serviceId]

            const newAvailability = { ...prev.availability }
            if (!isSelected && !newAvailability[serviceId]) {
                newAvailability[serviceId] = [...DEFAULT_SCHEDULE]
            }

            return { ...prev, services: newServices, availability: newAvailability }
        })
    }

    const updateAvailability = (schedule: typeof DEFAULT_SCHEDULE) => {
        const serviceId = formData.services[activeServiceIdx]
        if (!serviceId) return
        setFormData(prev => ({
            ...prev,
            availability: { ...prev.availability, [serviceId]: schedule }
        }))
    }

    const addPhoto = (url: string) => {
        setFormData(prev => ({ ...prev, photos: [...prev.photos, url] }))
    }

    const removePhoto = (idx: number) => {
        setFormData(prev => ({ ...prev, photos: prev.photos.filter((_, i) => i !== idx) }))
    }

    const handleDocUpload = (key: string, fileName: string) => {
        setFormData(prev => ({
            ...prev,
            documents: { ...prev.documents, [key]: fileName }
        }))
    }

    const nextStep = () => setStep(prev => Math.min(prev + 1, 7))
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

    const handleSubmit = () => {
        setIsSubmitting(true)
        setTimeout(() => {
            setStep(8) // Success screen
            setIsSubmitting(false)
        }, 3000)
    }

    const activeService = formData.services[activeServiceIdx] ? SERVICES.find(s => s.id === formData.services[activeServiceIdx]) : null

    const isStep1Valid = formData.businessName &&
        formData.email &&
        formData.phone &&
        formData.city &&
        formData.state &&
        formData.country &&
        formData.zipCode

    return (
        <div className="app-container">
            <header className="app-header">
                <img src={logo} alt="GENIE" className="h-8 w-auto logo-img" />
                <div className="step-indicator font-mono">
                    {step <= 7 ? (
                        <div className="flex items-center gap-[var(--space-3)]">
                            <span className="text-[var(--text-muted)]">
                                STEP <span className="text-[var(--primary-main)]">{step}</span> / 7
                            </span>
                            <ThemeToggle />
                        </div>
                    ) : (
                        <div className="flex items-center gap-[var(--space-3)]">
                            <span className="text-[var(--text-muted)]">COMPLETE</span>
                            <ThemeToggle />
                        </div>
                    )}
                </div>
            </header>

            <main className="app-main">
                <div className="step-content">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2, ease: [0.2, 0, 0.38, 0.9] }} // Mechanical Snap
                        >
                            {step === 1 && (
                                <div className="flex flex-col gap-[var(--space-4)]">
                                    <header>
                                        <h1 className="text-heading-1">Business Basics</h1>
                                        <p className="text-body-base text-[var(--text-body)] mt-2">
                                            Configure your core business identification and service range.
                                        </p>
                                    </header>

                                    <Card className="flex flex-col gap-[var(--space-3)]">
                                        <Input
                                            label="BUSINESS NAME"
                                            placeholder="e.g. Gotham Locksmiths"
                                            value={formData.businessName}
                                            onChange={(e) => handleInputChange('businessName', e.target.value)}
                                        />
                                        <Input
                                            label="WEBSITE URL (OPTIONAL)"
                                            placeholder="https://example.com"
                                            value={formData.website}
                                            onChange={(e) => handleInputChange('website', e.target.value)}
                                        />

                                        <div className="flex gap-[var(--space-2)] flex-col md:flex-row">
                                            <Input
                                                label="BUSINESS EMAIL"
                                                placeholder="contact@business.com"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                            />
                                            <Input
                                                label="BUSINESS PHONE"
                                                placeholder="(555) 123-4567"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                            />
                                        </div>

                                        <div className="flex gap-[var(--space-2)] flex-col md:flex-row">
                                            <Input
                                                label="CITY"
                                                placeholder="New York"
                                                value={formData.city}
                                                onChange={(e) => handleInputChange('city', e.target.value)}
                                            />
                                            <Select
                                                label="STATE"
                                                options={US_STATES}
                                                value={formData.state}
                                                onChange={(val) => handleInputChange('state', val)}
                                            />
                                        </div>

                                        <div className="flex gap-[var(--space-2)] flex-col md:flex-row">
                                            <Select
                                                label="COUNTRY"
                                                options={COUNTRIES}
                                                value={formData.country}
                                                onChange={(val) => handleInputChange('country', val)}
                                            />
                                            <Input
                                                label="ZIP CODE"
                                                placeholder="e.g. 10001"
                                                value={formData.zipCode}
                                                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                                            />
                                        </div>

                                        <Slider
                                            label="SERVICE RADIUS"
                                            value={formData.radius}
                                            min={0}
                                            max={100}
                                            unit=" MILES"
                                            onChange={(e) => handleInputChange('radius', e.target.value)}
                                        />
                                    </Card>

                                    <div className="flex justify-end mt-[var(--space-4)]">
                                        <Button
                                            onClick={nextStep}
                                            className="w-full md:w-auto"
                                            disabled={!isStep1Valid}
                                        >
                                            Continue to Services
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="flex flex-col gap-[var(--space-4)]">
                                    <header>
                                        <h1 className="text-heading-1">Services Offered</h1>
                                        <p className="text-body-base text-[var(--text-body)] mt-2">
                                            Select the categories your business provides.
                                        </p>
                                    </header>

                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-[var(--space-2)]">
                                        {SERVICES.map(service => (
                                            <ServiceCard
                                                key={service.id}
                                                label={service.label}
                                                icon={service.icon}
                                                selected={formData.services.includes(service.id)}
                                                onClick={() => toggleService(service.id)}
                                            />
                                        ))}
                                    </div>

                                    <div className="flex justify-between gap-[var(--space-3)] mt-[var(--space-4)]">
                                        <Button variant="secondary" onClick={prevStep}>
                                            Back
                                        </Button>
                                        <Button
                                            onClick={nextStep}
                                            disabled={formData.services.length === 0}
                                        >
                                            Availability
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="flex flex-col gap-[var(--space-4)]">
                                    <header>
                                        <h1 className="text-heading-1">Availability</h1>
                                        <p className="text-body-base text-[var(--text-body)] mt-2">
                                            Set working hours for each selected service.
                                        </p>
                                    </header>

                                    <div className="flex items-center gap-[var(--space-2)] mb-[var(--space-2)] overflow-x-auto pb-2 custom-scrollbar scrollbar-thin">
                                        {formData.services.map((id, index) => {
                                            const service = SERVICES.find(s => s.id === id)
                                            return (
                                                <Button
                                                    key={id}
                                                    variant={activeServiceIdx === index ? 'primary' : 'ghost'}
                                                    size="dense"
                                                    className="whitespace-nowrap"
                                                    onClick={() => setActiveServiceIdx(index)}
                                                >
                                                    {service?.label}
                                                </Button>
                                            )
                                        })}
                                    </div>

                                    {activeService && (
                                        <Card className="flex flex-col gap-[var(--space-4)]">
                                            <div className="flex items-center gap-[var(--space-2)] text-[var(--primary-main)]">
                                                {activeService.icon}
                                                <h3 className="text-heading-3 uppercase">{activeService.label} Schedule</h3>
                                            </div>

                                            <AvailabilityPicker
                                                schedule={formData.availability[activeService.id] || DEFAULT_SCHEDULE}
                                                onChange={updateAvailability}
                                            />
                                        </Card>
                                    )}

                                    <div className="flex justify-between gap-[var(--space-3)] mt-[var(--space-4)]">
                                        <Button variant="secondary" onClick={prevStep}>
                                            Back
                                        </Button>
                                        <Button onClick={nextStep}>
                                            Upload Photos
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {step === 4 && (
                                <div className="flex flex-col gap-[var(--space-4)]">
                                    <header>
                                        <h1 className="text-heading-1">Business Photos</h1>
                                        <p className="text-body-base text-[var(--text-body)] mt-2">
                                            Showcase your work and facilities. High-quality images increase trust.
                                        </p>
                                    </header>

                                    <PhotoUpload
                                        photos={formData.photos}
                                        onAdd={addPhoto}
                                        onRemove={removePhoto}
                                    />

                                    <div className="flex justify-between gap-[var(--space-3)] mt-[var(--space-4)]">
                                        <Button variant="secondary" onClick={prevStep}>
                                            Back
                                        </Button>
                                        <Button
                                            onClick={nextStep}
                                            disabled={formData.photos.length < 3}
                                        >
                                            Documents
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {step === 5 && (
                                <div className="flex flex-col gap-[var(--space-4)]">
                                    <header>
                                        <h1 className="text-heading-1">Documents</h1>
                                        <p className="text-body-base text-[var(--text-body)] mt-2">
                                            Upload necessary legal documents for verification.
                                        </p>
                                    </header>

                                    <DocumentUpload
                                        documents={formData.documents}
                                        onUpload={handleDocUpload}
                                    />

                                    <div className="flex justify-between gap-[var(--space-3)] mt-[var(--space-4)]">
                                        <Button variant="secondary" onClick={prevStep}>
                                            Back
                                        </Button>
                                        <Button
                                            onClick={nextStep}
                                            disabled={!formData.documents.insurance || !formData.documents.tax}
                                        >
                                            Preferences
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {step === 6 && (
                                <div className="flex flex-col gap-[var(--space-4)]">
                                    <header>
                                        <h1 className="text-heading-1">Contact Preferences</h1>
                                        <p className="text-body-base text-[var(--text-body)] mt-2">
                                            Configure how you want to be notified of new job opportunities.
                                        </p>
                                    </header>

                                    <Card className="flex flex-col gap-[var(--space-4)]">
                                        <div className="flex flex-col gap-[var(--space-2)]">
                                            <label className="text-[12px] font-medium uppercase tracking-wider text-[var(--text-muted)] font-mono">
                                                PREFERRED CONTACT METHOD
                                            </label>
                                            <div className="grid grid-cols-3 gap-[var(--space-2)]">
                                                {[
                                                    { id: 'email', label: 'Email', icon: <Envelope /> },
                                                    { id: 'phone', label: 'Phone', icon: <Phone /> },
                                                    { id: 'text', label: 'Text', icon: <ChatCircleText /> }
                                                ].map(item => (
                                                    <button
                                                        key={item.id}
                                                        onClick={() => handleInputChange('contactMethod', item.id)}
                                                        className={cn(
                                                            'flex flex-col items-center justify-center gap-1 p-3 border rounded-[var(--radius-sm)] transition-all',
                                                            formData.contactMethod === item.id
                                                                ? 'border-[var(--primary-main)] bg-[var(--primary-dim)] text-[var(--primary-main)]'
                                                                : 'border-[var(--border-subtle)] text-[var(--text-muted)]'
                                                        )}
                                                    >
                                                        {item.icon}
                                                        <span className="text-[12px] font-bold">{item.label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <Input
                                            label="MAX DAILY JOBS (OPTIONAL)"
                                            type="number"
                                            value={formData.maxJobs}
                                            onChange={(e) => handleInputChange('maxJobs', e.target.value)}
                                        />


                                    </Card>

                                    <div className="flex justify-between gap-[var(--space-3)] mt-[var(--space-4)]">
                                        <Button variant="secondary" onClick={prevStep}>
                                            Back
                                        </Button>
                                        <Button onClick={nextStep}>
                                            Review Application
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {step === 7 && (
                                <div className="flex flex-col gap-[var(--space-4)]">
                                    <header>
                                        <h1 className="text-heading-1">Review & Submit</h1>
                                        <p className="text-body-base text-[var(--text-body)] mt-2">
                                            Verify your information before submitting for verification.
                                        </p>
                                    </header>

                                    <div className="flex flex-col gap-[var(--space-3)]">
                                        <Card className="flex flex-col gap-[var(--space-4)]">
                                            <div className="flex justify-between items-start border-b border-[var(--border-subtle)] pb-2">
                                                <div>
                                                    <h3 className="text-heading-3 uppercase">{formData.businessName || 'Unnamed Business'}</h3>
                                                    <div className="flex items-center gap-1 text-[var(--text-muted)] text-[12px]">
                                                        <MapPin size={14} />
                                                        <span>{formData.city}, {formData.state} {formData.zipCode} • {formData.radius} Miles</span>
                                                    </div>
                                                </div>
                                                <Button variant="ghost" size="dense" onClick={() => setStep(1)}>EDIT</Button>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-4)]">
                                                <div>
                                                    <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase font-mono block mb-1">SERVICES</span>
                                                    <div className="flex flex-wrap gap-1">
                                                        {formData.services.map(id => (
                                                            <span key={id} className="text-[10px] bg-[var(--bg-input)] border border-[var(--border-subtle)] px-2 py-0.5 rounded-sm uppercase font-bold">
                                                                {SERVICES.find(s => s.id === id)?.label}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase font-mono block mb-1">DOCUMENTS</span>
                                                    <div className="flex flex-col gap-1">
                                                        <div className="flex items-center gap-1 text-[11px] text-[var(--status-success)] font-bold">
                                                            <CheckCircle size={14} />
                                                            <span>INSURANCE UPLOADED</span>
                                                        </div>
                                                        <div className="flex items-center gap-1 text-[11px] text-[var(--status-success)] font-bold">
                                                            <CheckCircle size={14} />
                                                            <span>EIN UPLOADED</span>
                                                        </div>
                                                        {formData.documents.license && (
                                                            <div className="flex items-center gap-1 text-[11px] text-[var(--status-success)] font-bold">
                                                                <CheckCircle size={14} />
                                                                <span>LICENSE UPLOADED</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase font-mono block mb-2">PHOTOS ({formData.photos.length})</span>
                                                <div className="flex gap-2 overflow-x-auto">
                                                    {formData.photos.map((url, i) => (
                                                        <img key={i} src={url} className="w-16 h-16 object-cover rounded-sm border border-[var(--border-subtle)]" />
                                                    ))}
                                                </div>
                                            </div>
                                        </Card>

                                        <div className="p-[var(--space-3)] bg-[var(--primary-dim)] border border-[var(--primary-main)] rounded-[var(--radius-md)] flex gap-3">
                                            <Clock size={24} className="text-[var(--primary-main)] shrink-0" />
                                            <div>
                                                <p className="text-[13px] font-bold text-[var(--text-primary)] uppercase">Verification Timeline</p>
                                                <p className="text-[12px] text-[var(--text-body)] mt-1">
                                                    Our team typically reviews applications within 24-48 business hours. You'll receive a notification once verified.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between gap-[var(--space-3)] mt-[var(--space-4)]">
                                        <Button variant="secondary" onClick={prevStep}>
                                            Back
                                        </Button>
                                        <Button
                                            onClick={handleSubmit}
                                            isLoading={isSubmitting}
                                            className="flex-1 md:flex-none md:min-w-[200px]"
                                        >
                                            {isSubmitting ? 'Verifying...' : 'Submit Application'}
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {step === 8 && (
                                <div className="flex flex-col items-center justify-center gap-[var(--space-6)] py-[var(--space-10)] text-center min-h-[60vh]">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: 'spring', damping: 12 }}
                                        className="w-24 h-24 bg-[var(--status-success)] rounded-full flex items-center justify-center text-white"
                                    >
                                        <CheckCircle size={64} weight="fill" />
                                    </motion.div>

                                    <div>
                                        <h1 className="text-heading-1 uppercase tracking-tighter">Application Submitted</h1>
                                        <p className="text-body-base text-[var(--text-body)] mt-2 max-w-[400px]">
                                            Your business data has been encrypted and sent to our verification grid. We'll be in touch soon.
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-[var(--space-2)] w-full max-w-[300px]">
                                        <Button variant="secondary" onClick={() => window.location.href = 'mailto:vendor@findmygenie.com'}>
                                            Get in Touch
                                        </Button>
                                        <span className="text-[10px] text-[var(--text-muted)] font-mono uppercase">Reference: GEN-V-{Math.floor(Math.random() * 90000) + 10000}</span>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    )
}

export default App
