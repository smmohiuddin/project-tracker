import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        ProjectRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        FormsModule
    ],
    declarations: [ProjectComponent]
})
export class ProjectModule { }
