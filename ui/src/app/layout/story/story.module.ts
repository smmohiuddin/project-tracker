import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoryRoutingModule} from './story-routing.module';
import {StoryComponent} from "./story.component";
import {PageHeaderModule} from "../../shared/modules/page-header/page-header.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        StoryRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        FormsModule
    ],
    declarations: [StoryComponent]
})
export class StoryModule {
}
