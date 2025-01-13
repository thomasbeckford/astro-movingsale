import { Button } from '@/components/ui/button'

export default function BackButton() {
  return (
    <Button
      variant="link"
      className="bg-blue-400 rounded text-white my-4 shadow-lg"
      onClick={() => {
        window.history.back()
      }}
    >
      Volver al inicio
    </Button>
  )
}
