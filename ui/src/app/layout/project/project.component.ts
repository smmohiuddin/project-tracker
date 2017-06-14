import {Component, OnInit} from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

import {ProjectService} from '../../shared/services/index';
import {DateUtilService} from '../../shared/utilities/index';

import {Project} from '../../shared/models/project';


@Component({
    selector: 'app-projects',
    providers: [ProjectService, DateUtilService, NgbModal],
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

    selectedProject: Project = null;
    projects: Project[];
    errorMessage: string;
    modal: NgbModalRef;

    constructor(private projectService: ProjectService, private dateUtilService: DateUtilService, private modalService: NgbModal) {
    };

    open(content, project) {

        // Transforming  Date to UI bootstrap date
        if (project != null) {
            this.selectedProject = Object.assign({}, project);
            this.selectedProject.startDate = this.dateUtilService.transformUIDate(this.selectedProject.startDate);
            this.selectedProject.actualStartDate = this.dateUtilService.transformUIDate(this.selectedProject.actualStartDate);
            this.selectedProject.endDate = this.dateUtilService.transformUIDate(this.selectedProject.endDate);
            this.selectedProject.actualEndDate = this.dateUtilService.transformUIDate(this.selectedProject.actualEndDate);
        } else {
            this.selectedProject = new Project();
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

    createProject(): void {
        this.projectService.processDates(this.selectedProject, this.dateUtilService);
        this.projectService.createProject(this.selectedProject).subscribe(
            projects => this.projects = projects,
            error => this.errorMessage = <any> error
        );
        this.closeModal("project info saved")
    };

    updateProject(): void {
        this.projectService.processDates(this.selectedProject, this.dateUtilService);
        this.projectService.updateProjects(this.selectedProject).subscribe(
            projects => this.projects = projects,
            error => this.errorMessage = <any> error
        );
        this.closeModal("project info saved")
    }

    ngOnInit() {
        this.getProjects();
    }

    closeModal(reason: any) {
        this.modal.dismiss(reason);
    }
}
