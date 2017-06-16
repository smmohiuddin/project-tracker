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
    stories: Story[];

    constructor(private projectService: ProjectService, private epicService: EpicService, private storyService: StoryService, private dateUtilService: DateUtilService,private modalService: NgbModal) {
    }

    getProjects(): void {
        this.projectService.getProjects().subscribe(
            projects => this.projects = projects,
            error => this.errorMessage = <any> error
        );
    }

    createStory(): void {
        this.storyService.processDates(this.story, this.dateUtilService);
        this.storyService.createStory(this.story, this.story.epic.epicID, this.story.epic.project.projectID).subscribe(
            stories => this.stories = stories,
            error => this.errorMessage = <any> error
        );
        this.closeModal("Epic info saved");
    }

    open(content, story) {

        if (story != null) {
            this.story = Object.assign({}, story);
            this.story.epic = (this.selectedEpic === undefined) ? new Epic() : this.selectedEpic;
            this.story.epic.project = this.selectedProject;
            this.story.startDate = this.dateUtilService.transformUIDate(this.story.startDate);
            this.story.actualStartDate = this.dateUtilService.transformUIDate(this.story.actualStartDate);
            this.story.endDate = this.dateUtilService.transformUIDate(this.story.endDate);
            this.story.actualEndDate = this.dateUtilService.transformUIDate(this.story.actualEndDate);
        } else {
            this.story = new Story();
            this.story.epic = (this.selectedEpic === undefined) ? new Epic() : this.selectedEpic;
            this.story.epic.project = this.selectedProject;
        }

        // Open Modal
        this.modal = this.modalService.open(content);
    }

    ngOnInit() {
        this.getProjects();
    }

    onProjectChange(): void {
        this.epicService.getAllEpic(this.selectedProject.projectID).subscribe(
            epics => this.epics = epics,
            error => this.errorMessage = <any> error
        );
    }

    onEpicChange(): void {
        this.storyService.getAllStories(this.selectedEpic.epicID).subscribe(
            stories => this.stories = stories,
            error => this.errorMessage = <any> error
        );
    }

    closeModal(reason: any) {
        this.modal.dismiss(reason);
    }
}
