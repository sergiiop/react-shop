import { useComponents } from './components'
import { useLayouts } from './layouts'
import { useScreens } from './screens'

export const useViews = () => {
  return {
    useComponents,
    useLayouts,
    useScreens
  }
}
