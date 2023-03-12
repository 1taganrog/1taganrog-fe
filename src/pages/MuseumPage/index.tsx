import { lazy, Suspense } from 'react'
import LoadingScreen from '../LoadingPage'

const MuseumPage = lazy(
  () => import('./MuseumPage'),
)

function MuseumPageRoot(): JSX.Element {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <MuseumPage />
    </Suspense>
  )
}

export default MuseumPageRoot

