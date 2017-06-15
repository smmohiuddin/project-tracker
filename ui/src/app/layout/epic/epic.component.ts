import {Component, OnInit} from '@angular/core';
import {Project, Epic} from "../../shared/models/index";
import {ProjectService, EpicService} from "../../shared/services/index";
import {NgbModalRef, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DateUtilService} from "../../shared/utilities/date-util.service";

@Component({
    selector: 'app-epic',
    providers: [ProjectService, EpicService, DateUtilService, NgbModal],
    templateUrl: './epic.component.html',
    styleUrls: ['./epic.component.scss']
})
export class EpicComponent implements OnInit {

    errorMessage: string = "";
    projects: Project[] = [];
    epics: Epic[] = [];
    selectedProject: Project;
    epic: Epic;
    modal: NgbModalRef;

    constructor(private projectService: ProjectService, private epicService: EpicService, private dateUtilService: DateUtilService, private modalService: NgbModal) {}

    getProjects(): void {
        this.projectService.getProjects().subscribe(
            projects => this.projects = projects,
            error => this.errorMessage = <any> error
        );
    }

    onProjectChange(): void {
        this.epicService.getAllEpic(this.selectedProject.projectID).subscribe(
            epics => this.epics = epics,
            error => this.errorMessage = <any> error
        );
    }

    open(content, epic) {

        if (epic != null) {
            this.epic = Object.assign({}, epic);
            this.epic.project = this.selectedProject;
            this.epic.startDate = this.dateUtilService.transformUIDate(this.epic.startDate);
            this.epic.actualStartDate = this.dateUtilService.transformUIDate(this.epic.actualStartDate);
            this.epic.endDate = this.dateUtilService.transformUIDate(this.epic.endDate);
            this.epic.actualEndDate = this.dateUtilService.transformUIDate(this.epic.actualEndDate);
        } else {
            this.epic = new Epic();
            this.epic.project = this.selectedProject;
        }

        // Open Modal
        this.modal = this.modalService.open(content);
    }

    createEpic(): void {
        this.processDates();
        this.epicService.createEpic(this.epic, this.epic.project.projectID).subscribe(
            epics => this.epics = epics,
            error => this.errorMessage = <any> error
        );
        this.closeModal("Epic info saved")
    };

    private processDates(): void {
        this.epicService.processDates(this.epic, this.dateUtilService);
    }

    ngOnInit() {
        this.getProjects();
    }

    closeModal(reason: any) {
        this.modal.dismiss(reason);
    }
}
