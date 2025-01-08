import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export default function ZoomableImage({
  src,
  alt,
}: {
  src: string
  alt?: string
}) {
  if (!src) return null

  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={src}
          alt={alt || ''}
          className="w-full h-48 object-cover"
          width="400"
          height="300"
          loading="lazy"
          decoding="async"
        />
      </DialogTrigger>
      <DialogContent className="max-w-7xl border-0 bg-transparent p-0">
        <div className="relative h-[calc(100vh-220px)] w-full overflow-clip rounded-md bg-transparent shadow-md">
          <img
            src={src}
            alt={alt || ''}
            className="h-full w-full object-contain"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={500}
            height={100}
            loading="lazy"
            decoding="async"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
