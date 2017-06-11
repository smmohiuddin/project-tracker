import {Component, OnInit} from '@angular/core';

import {ProjectService} from '../../shared/services/project.service';
import {Project} from '../../shared/models/project';

@Component({
    selector: 'app-projects',
    providers:[ProjectService],
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
    projects: Project[];

    constructor(private projectService: ProjectService) {}

    getProjects() : void {
        this.projects = this.projectService.getProjects();
    }

    ngOnInit() {
        this.getProjects();
    }
}
