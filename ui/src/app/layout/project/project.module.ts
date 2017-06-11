import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        ProjectRoutingModule,
        PageHeaderModule
    ],
    declarations: [ProjectComponent]
})
export class ProjectModule { }
