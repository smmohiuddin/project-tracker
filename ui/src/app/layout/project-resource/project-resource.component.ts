import {Component, OnInit} from '@angular/core';
import {ProjectService, ResourceService, ProjectResourceService} from "../../shared/services/index";
import {Project, Resource, ProjectResource} from "../../shared/models/index";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-project-resource',
    providers: [ProjectService, ResourceService, ProjectResourceService],
    templateUrl: './project-resource.component.html',
    styleUrls: ['./project-resource.component.scss']
})

export class ProjectResourceComponent implements OnInit {

    projects: Project[];
    errorMessage: string;
    selectedProject: Project;
    selectedResource: Resource;
    resources: Resource[];
    modal: NgbModalRef;
    projectResource: ProjectResource;
    projectResources: ProjectResource[];

    constructor(private projectService: ProjectService, private resourceService: ResourceService, private projectResourceService: ProjectResourceService, private modalService: NgbModal) {
    }

    open(content, resource) {
        if (resource != null) {
            //this.resource = Object.assign({}, resource);
        } else {
            this.projectResource = new ProjectResource();
            this.projectResource.project = this.selectedProject;
            this.projectResource.resource = this.selectedResource;
        }

        // Open Modal
        this.modal = this.modalService.open(content);
    };

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

    assignProjectResource(): void {
        this.projectResourceService.assignProjectResource(this.projectResource).subscribe(
            projectResources => this.projectResources= projectResources,
            error => this.errorMessage = <any> error
        );

        this.closeModal("Project Resource assigned successfully.")
    }

    ngOnInit() {
        this.getProjects();
        this.getResources();
    }

    closeModal(reason: any) {
        this.modal.dismiss(reason);
    }
}
