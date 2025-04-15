import { useState, useCallback } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Copy, CopyCheck } from "lucide-react"
import styles from "./CopyLink.module.css"

export const CopyLink = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [copied, setCopied] = useState(false)

    const fullUrl = `${pathname}?${searchParams.toString()}`

    const handleClick = useCallback(() => {
        if (!copied) {
            const absoluteUrl = `${window.location.origin}${fullUrl}`
            navigator.clipboard.writeText(absoluteUrl).then(() => {
                setCopied(true)
            })
        }
    }, [fullUrl])

    return (
        <button onClick={handleClick} className={`${styles.iconCopy} glowing`}>
            {copied
                ? <CopyCheck className={styles.icon} />
                : <Copy className={styles.icon} />
            }
            <p className={styles.copyLinkText}>Copy link</p>
        </button>
    )
}
