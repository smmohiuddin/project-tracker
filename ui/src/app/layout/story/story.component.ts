import {Component, OnInit} from '@angular/core';
import {ProjectService, EpicService, StoryService} from "../../shared/services/index";
import {Project, Epic, Story} from "../../shared/models/index";
import {DateUtilService} from "../../shared/utilities/date-util.service";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-story',
    providers: [ProjectService, EpicService, DateUtilService, StoryService, NgbModal],
    templateUrl: './story.component.html',
    styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

    errorMessage: string;
    projects: Project[];
    selectedProject: Project;
    selectedEpic: Epic;
    epics: Epic[];
    modal: NgbModalRef;
    story: Story;

    constructor(private projectService: ProjectService, private epicService: EpicService, private storyService: StoryService, private modalService: NgbModal) {
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

    open(content, story) {

        this.story = new Story();

        this.story.epic = (this.selectedEpic === undefined) ? new Epic() : this.selectedEpic;

        this.story.epic.project = this.selectedProject;

        // Open Modal
        this.modal = this.modalService.open(content);
    }

    ngOnInit() {
        this.getProjects();
    }

    closeModal(reason: any) {
        this.modal.dismiss(reason);
    }
}
