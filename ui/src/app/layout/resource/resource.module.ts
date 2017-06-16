import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ResourceRoutingModule} from './resource-routing.module';
import {ResourceComponent} from './resource.component';
import {PageHeaderModule} from "../../shared/modules/page-header/page-header.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        ResourceRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        FormsModule
    ],
    declarations: [ResourceComponent]
})
export class ResourceModule {
}
