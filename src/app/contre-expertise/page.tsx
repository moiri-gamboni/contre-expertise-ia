import { Experts } from '@/components/Experts'
import { Report } from '@/components/Report'

export default function FullReport() {
  return (
    <>
      <Report />
      <Experts expanded={true} />
    </>
  )
}
