import {Component, OnInit} from '@angular/core';
import {ProjectService, ResourceService} from "../../shared/services/index";
import {Project, Resource} from "../../shared/models/index";

@Component({
    selector: 'app-project-resource',
    providers: [ProjectService, ResourceService],
    templateUrl: './project-resource.component.html',
    styleUrls: ['./project-resource.component.scss']
})
export class ProjectResourceComponent implements OnInit {

    projects: Project[];
    errorMessage: string;
    selectedProject: Project;
    selectedResource: Resource;
    resources: Resource[];

    constructor(private projectService: ProjectService, private resourceService: ResourceService) {
    }

    getProjects(): void {
        this.projectService.getProjects().subscribe(
            projects => this.projects = projects,
            error => this.errorMessage = <any> error
        );
    }

    getResources(): void {
        this.resourceService.getResources().subscribe(
            resources => this.resources = resources,
            error => this.errorMessage = <any> error
        );
    }

    ngOnInit() {
        this.getProjects();
        this.getResources();
    }

}
