import {Component, OnInit} from '@angular/core';

import {ProjectService} from '../../shared/services/project.service';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

import {Project} from '../../shared/models/project';


@Component({
    selector: 'app-projects',
    providers: [ProjectService, NgbModal],
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

    selectedProject: Project;
    projects: Project[];
    errorMessage: string;
    modal: NgbModalRef;

    constructor(private projectService: ProjectService, private modalService: NgbModal) {};

    open(content, project) {
        this.selectedProject = Object.assign({}, project);
        this.modal = this.modalService.open(content);
    };

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    };

    getProjects(): void {
        this.projectService.getProjects().subscribe(
            projects => this.projects = projects,
            error => this.errorMessage = <any> error
        );
    }

    createProject(): void {
        console.log(this.selectedProject);
        this.projectService.createProject(this.selectedProject).subscribe(
            projects => this.projects = projects,
            error => this.errorMessage = <any> error
        );
        this.closeModal("project info saved")
    };

    ngOnInit() {
        this.getProjects();
    }

    closeModal(reason: any) {
        this.modal.dismiss(reason);
    }
}
