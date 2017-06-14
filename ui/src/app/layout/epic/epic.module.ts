import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import {EpicRoutingModule} from './epic-routing.module';
import { PageHeaderModule } from '../../shared';
import { EpicComponent } from './epic.component';

@NgModule({
    imports: [
        CommonModule,
        EpicRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        FormsModule
    ],
    declarations: [EpicComponent]
})
export class EpicModule {
}
