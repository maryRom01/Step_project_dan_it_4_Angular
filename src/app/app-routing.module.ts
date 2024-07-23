import { RouterModule, Routes } from "@angular/router"
import { ListComponent } from "./list/list.component"
import { NgModule } from "@angular/core"
import { CustomerComponent } from "./customer/customer.component"

const routes: Routes = [
    { path: '', redirectTo: "/customers", pathMatch: "full" },
    { path: 'customers', component: ListComponent },
    { path: 'customers/customer/:id', component: CustomerComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}