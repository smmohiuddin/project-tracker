import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectResourceComponent} from "./project-resource.component";

const routes: Routes = [
    {path: '', component: ProjectResourceComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectResourceRoutingModule {
}
