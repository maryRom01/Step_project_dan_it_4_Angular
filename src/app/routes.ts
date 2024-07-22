import { Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { CustomerComponent } from "./customer/customer.component";

const routeConfig: Routes = [
    {
        path: 'api/v1/customers',
        component: ListComponent,
        title: 'List of customers'
    },
    {
        path: 'api/v1/customers/customer/:id',
        component: CustomerComponent,
        title: 'Customer'
    }
]

export default routeConfig;