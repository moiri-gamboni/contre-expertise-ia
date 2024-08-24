import '@/styles/tufte.css'

interface SidenoteProps {
  id: string
  type: 'sidenote' | 'marginnote'
  children: React.ReactNode
}

export function Sidenote({ id, type = 'sidenote', children }: SidenoteProps) {
  return (
    <>
      <label htmlFor={id} className={`margin-toggle ${type == 'sidenote' ? 'sidenote-number' : ''}`}></label>
      <input type="checkbox" id={id} className="margin-toggle" />
      <span className={type}>{children}</span>
    </>
  )
}
