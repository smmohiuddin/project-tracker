import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../shared/services/project.service";
import {Project} from "../../shared/models/project";
import {EpicService} from "../../shared/services/epic.service";
import {DateUtilService} from "../../shared/utilities/date-util.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Epic} from "../../shared/models/epic";

@Component({
    selector: 'app-story',
    providers: [ProjectService, EpicService, DateUtilService, NgbModal],
    templateUrl: './story.component.html',
    styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

    errorMessage: string;
    projects: Project[];
    selectedProject: Project;
    selectedEpic: Epic;
    epics: Epic[];

    constructor(private projectService: ProjectService, private epicService: EpicService) {
    }

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

    onEpicChange(): void {
        console.log(this.selectedEpic);
    }

    ngOnInit() {
        this.getProjects();
    }

}
