import appsNavigationConfig from './apps.navigation.config'
import pagesNavigationConfig from './pages.navigation.config'
import authNavigationConfig from './auth.navigation.config'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    ...appsNavigationConfig,
    ...authNavigationConfig,
]

export default navigationConfig
