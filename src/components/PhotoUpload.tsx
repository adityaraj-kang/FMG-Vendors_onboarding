import React, { useRef } from 'react'
import { Image, Plus, Trash, ArrowsOutCardinal } from '@phosphor-icons/react'
import { cn } from '../utils/cn'

interface PhotoUploadProps {
    photos: string[]
    onAdd: (url: string) => void
    onRemove: (index: number) => void
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ photos, onAdd, onRemove }) => {
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files && files.length > 0) {
            // Create local URL for preview
            const url = URL.createObjectURL(files[0])
            onAdd(url)
        }
    }

    const triggerInput = () => {
        fileInputRef.current?.click()
    }

    return (
        <div className="flex flex-col gap-[var(--space-4)]">
            <div
                onClick={triggerInput}
                className={cn(
                    'flex flex-col items-center justify-center gap-[var(--space-2)] p-[var(--space-6)]',
                    'border-2 border-dashed border-[var(--border-strong)] rounded-[var(--radius-lg)]',
                    'hover:border-[var(--primary-main)] hover:bg-[var(--primary-dim)] cursor-pointer transition-all'
                )}
            >
                <Plus size={32} weight="bold" className="text-[var(--primary-main)]" />
                <div className="text-center">
                    <span className="text-[14px] font-semibold text-[var(--text-primary)] block">DROP PHOTOS HERE OR CLICK</span>
                    <span className="text-[12px] text-[var(--text-muted)] uppercase font-mono">3-10 Photos required (JPG, PNG)</span>
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*"
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-[var(--space-2)]">
                {photos.map((url, index) => (
                    <div key={index} className="relative group aspect-square rounded-[var(--radius-md)] overflow-hidden border border-[var(--border-subtle)]">
                        <img src={url} alt={`Upload ${index}`} className="w-full h-full object-cover" />

                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-[var(--space-4)]">
                            <button
                                onClick={() => onRemove(index)}
                                className="p-2 bg-[var(--status-error)] rounded-full text-[var(--text-inverse)] hover:scale-110 transition-transform"
                            >
                                <Trash size={20} />
                            </button>
                            <div className="p-2 bg-[var(--border-subtle)] rounded-full text-[var(--text-inverse)] cursor-grab">
                                <ArrowsOutCardinal size={20} />
                            </div>
                        </div>

                        {index === 0 && (
                            <div className="absolute top-2 left-2 px-2 py-1 bg-[var(--primary-main)] text-[var(--text-inverse)] text-[10px] font-bold uppercase rounded-sm">
                                COVER
                            </div>
                        )}
                    </div>
                ))}

                {Array.from({ length: Math.max(0, 3 - photos.length) }).map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square rounded-[var(--radius-md)] border border-dashed border-[var(--border-subtle)] flex items-center justify-center bg-[var(--bg-input)]/50">
                        <Image size={24} className="text-[var(--text-disabled)]" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PhotoUpload
