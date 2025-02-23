import { signal } from '@angular/core';  // Import 'signal' from Angular core

export type MenuItem = {
    name: string;
    icon: string;
    route: string;
    children?: MenuItem[];
}

export class MenuItemService {

    menuItems = signal<MenuItem[]>([
        {
            name: 'Dashboard',
            icon: 'dashboard',
            route: 'dashboard',
        },
        {
            name: 'Master',
            icon: 'analytics',
            route: 'master',
            children: [
                {
                    name: 'Product',
                    icon: 'analytics',
                    route: 'product',
                    children: [
                        {
                            name: 'Add Product',
                            icon: 'product',
                            route: 'addProduct',
                        }
                    ]
                },
                {
                    name: 'Ehnic',
                    icon: 'product',
                    route: 'etnic',
                }
            ]
        },
    ]);
}
