import { lazy, Suspense } from 'react'
import LoadingScreen from '../LoadingPage'

const HomePage = lazy(
  () => import('./HomePage'),
)

function HomePageRoot(): JSX.Element {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <HomePage />
    </Suspense>
  )
}

export default HomePageRoot

