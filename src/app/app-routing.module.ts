import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { BlankPageComponent } from "./modules/blank-page/blank-page.component";
import { NgModule } from "@angular/core";
import { ProductModule } from "./modules/master/product/product.module";
import { UserComponent } from "./modules/master/user/user.component";
import { BranchBookedComponent } from "./modules/master/product/branch-booked/branch-booked.component";


const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    // {
    //     path: '**',
    //     redirectTo: '/login',
    //     pathMatch : 'full'
    // },

    {
        path: 'login',
        component: AuthComponent,
    },
    {
        path: 'booked',
        component: BranchBookedComponent,
    },
    {
        path: 'dashboard',
        component: BlankPageComponent,
    },
    {
        path: 'user-access',
        component: UserComponent,
    },
    {
        path: 'master/product',
        loadChildren: ()=> import('./modules/master/product/product.module').then((x) => ProductModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})

export class ApproutingModule {
    constructor() { }
}