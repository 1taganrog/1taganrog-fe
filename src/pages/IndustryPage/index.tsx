import { lazy, Suspense } from 'react'
import LoadingScreen from '../LoadingPage'

const IndustryPage = lazy(
  () => import('./IndustryPage'),
)

function IndustryPageRoot(): JSX.Element {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <IndustryPage />
    </Suspense>
  )
}

export default IndustryPageRoot

