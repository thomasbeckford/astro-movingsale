import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

interface ZoomableImageDialogProps {
  children: React.ReactNode
  thumbnailSrc: string
  fullImageSrc: string
  alt: string
}

export default function ZoomableImageDialog({
  children,
  thumbnailSrc,
  fullImageSrc,
  alt,
}: ZoomableImageDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div onClick={() => setIsOpen(true)}>{children}</div>
      </DialogTrigger>
      <DialogContent className="max-w-7xl border-0 bg-transparent p-0">
        <div className="relative h-[calc(100vh-220px)] w-full overflow-hidden rounded-md bg-transparent shadow-md">
          <img
            src={fullImageSrc}
            alt={alt}
            className="h-full w-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
