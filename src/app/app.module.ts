import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { CustomerComponent } from "./customer/customer.component";
import { ButtonComponent } from "./button/button.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ListComponent,
        CustomerComponent,
        ButtonComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}