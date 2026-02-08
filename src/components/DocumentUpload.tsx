import React, { useRef } from 'react'
import { CheckCircle } from '@phosphor-icons/react'
import { cn } from '../utils/cn'

interface DocumentItemProps {
    label: string
    required?: boolean
    fileName: string | null
    onUpload: (name: string) => void
}

const DocumentItem: React.FC<DocumentItemProps> = ({ label, required, fileName, onUpload }) => {
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files && files.length > 0) {
            onUpload(files[0].name)
        }
    }

    return (
        <div className={cn(
            'flex flex-col md:flex-row md:items-center justify-between p-[var(--space-3)] rounded-[var(--radius-md)] border transition-all gap-[var(--space-2)]',
            fileName ? 'border-[var(--primary-main)] bg-[var(--primary-dim)]' : 'border-[var(--border-subtle)] bg-[var(--bg-input)]'
        )}>
            <div className="flex flex-col">
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[14px] font-bold text-[var(--text-primary)] uppercase font-mono">{label}</span>
                    {required && !fileName && <span className="text-[10px] bg-[var(--status-error)]/10 text-[var(--status-error)] px-1.5 rounded-sm font-bold">REQUIRED</span>}
                </div>
                <div className="flex items-center gap-2 mt-1">
                    {fileName ? (
                        <>
                            <CheckCircle size={16} weight="fill" className="text-[var(--status-success)]" />
                            <span className="text-[12px] text-[var(--text-body)] font-mono truncate max-w-[180px] md:max-w-[200px]">{fileName}</span>
                        </>
                    ) : (
                        <span className="text-[12px] text-[var(--text-muted)] font-mono uppercase">No file selected</span>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-2 self-start md:self-center">
                <Button
                    variant={fileName ? 'ghost' : 'secondary'}
                    size="dense"
                    onClick={() => fileInputRef.current?.click()}
                >
                    {fileName ? 'REPLACE' : 'UPLOAD PDF'}
                </Button>
            </div>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf"
            />
        </div>
    )
}

interface DocumentUploadProps {
    documents: Record<string, string | null>
    onUpload: (key: string, fileName: string) => void
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ documents, onUpload }) => {
    return (
        <div className="flex flex-col gap-[var(--space-2)]">
            <DocumentItem
                label="Insurance Certificate"
                required
                fileName={documents.insurance}
                onUpload={(name) => onUpload('insurance', name)}
            />
            <DocumentItem
                label="Business License"
                fileName={documents.license}
                onUpload={(name) => onUpload('license', name)}
            />
            <DocumentItem
                label="EIN / Tax ID"
                required
                fileName={documents.tax}
                onUpload={(name) => onUpload('tax', name)}
            />
            <DocumentItem
                label="Other Documents"
                fileName={documents.other}
                onUpload={(name) => onUpload('other', name)}
            />
        </div>
    )
}

import Button from './Button'
export default DocumentUpload
