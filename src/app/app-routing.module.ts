import { RouterModule, Routes } from "@angular/router"
import { ListComponent } from "./list/list.component"
import { NgModule } from "@angular/core"

const routes: Routes = [
    { path: '', redirectTo: "/customers", pathMatch: "full"},
    { path: 'customers', component: ListComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}