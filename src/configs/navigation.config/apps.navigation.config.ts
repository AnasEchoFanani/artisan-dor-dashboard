import { APP_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const appsNavigationConfig: NavigationTree[] = [
    {
        key: 'apps',
        path: '',
        title: 'APPS',
        translateKey: 'nav.apps',
        icon: 'apps',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
            {
                key: 'appsSales.dashboard',
                path: `${APP_PREFIX_PATH}/dashboard`,
                title: 'Dashboard',
                translateKey: 'nav.appsSales.dashboard',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'apps.sales',
                path: '',
                title: 'Sales',
                translateKey: 'nav.appsSales.sales',
                icon: 'sales',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    
                    {
                        key: 'appsSales.productList',
                        path: `${APP_PREFIX_PATH}/sales/product-list`,
                        title: 'Product List',
                        translateKey: 'nav.appsSales.productList',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'appsSales.productNew',
                        path: `${APP_PREFIX_PATH}/sales/product-new`,
                        title: 'New Product',
                        translateKey: 'nav.appsSales.productNew',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                    {
                        key: 'appsSales.orderList',
                        path: `${APP_PREFIX_PATH}/sales/order-list`,
                        title: 'Order List',
                        translateKey: 'nav.appsSales.orderList',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: [],
                    },
                ],
            },
            
        ],
    },
]

export default appsNavigationConfig
