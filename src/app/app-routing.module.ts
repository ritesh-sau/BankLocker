import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { BlankPageComponent } from "./modules/blank-page/blank-page.component";
import { NgModule } from "@angular/core";
import { ProductModule } from "./modules/master/product/product.module";
import { UserComponent } from "./modules/master/user/user.component";
import { BranchBookedComponent } from "./modules/master/product/branch-booked/branch-booked.component";
import { AvailableBranchComponent } from "./modules/master/product/available-branch/available-branch.component";
import { PaymentComponent } from "./modules/master/user/payment/payment.component";
import { ReservedLockersComponent } from "./modules/master/product/reserved-lockers/reserved-lockers.component";


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
        path: 'branch/booked',
        component: BranchBookedComponent,
    },
    {
        path: 'branch/available',
        component: AvailableBranchComponent,
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
        path: 'payment',
        component: PaymentComponent,
    },
    {
        path: 'reserved/locker',
        component: ReservedLockersComponent,
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