import { lazy, Suspense } from 'react'
import LoadingScreen from '../LoadingPage'

const AlbumPage = lazy(
  () => import('./AlbumPage'),
)

function AlbumPageRoot(): JSX.Element {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AlbumPage />
    </Suspense>
  )
}

export default AlbumPageRoot

