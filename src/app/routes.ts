import { Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { CustomerComponent } from "./customer/customer.component";

const routeConfig: Routes = [
    {
        path: 'customers',
        component: ListComponent,
        title: 'List of customers'
    },
    {
        path: 'customers/customer/:id',
        component: CustomerComponent,
        title: 'Customer'
    }
]

export default routeConfig;