import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'projects', loadChildren: './project/project.module#ProjectModule' },
            { path: 'epics', loadChildren: './epic/epic.module#EpicModule' },
            { path: 'stories', loadChildren: './story/story.module#StoryModule' },
            { path: 'tasks', loadChildren: './task/task.module#TaskModule' },
            { path: 'resources', loadChildren: './resource/resource.module#ResourceModule' },
            { path: 'project-resources', loadChildren: './project-resource/project-resource.module#ProjectResourceModule' },

            /*{ path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },*/
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
