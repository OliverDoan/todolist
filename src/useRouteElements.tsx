import { useRoutes } from 'react-router-dom'
import Home from './pages/home'
import NotFound from './pages/not-found'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    { path: '*', element: <NotFound /> }
  ])
  return routeElements
}
