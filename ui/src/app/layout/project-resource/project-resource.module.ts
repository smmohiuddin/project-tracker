import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProjectResourceRoutingModule} from './project-resource-routing.module';
import {ProjectResourceComponent} from './project-resource.component';
import {PageHeaderModule} from "../../shared/modules/page-header/page-header.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        ProjectResourceRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        FormsModule
    ],
    declarations: [ProjectResourceComponent]
})
export class ProjectResourceModule {
}
