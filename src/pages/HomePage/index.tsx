import { lazy, Suspense } from 'react'
import LoadingScreen from '../LoadingPage'

const HomePage = lazy(
  () => import('./HomePage'),
)

function EscalationProfilesRoot(): JSX.Element {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <HomePage />
    </Suspense>
  )
}

export default EscalationProfilesRoot

