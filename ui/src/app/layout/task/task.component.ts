import {Component, OnInit} from '@angular/core';
import {ProjectService, EpicService, StoryService, TaskService} from "../../shared/services/index";
import {Project, Epic, Story, Task} from "../../shared/models/index";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {DateUtilService} from "../../shared/utilities/date-util.service";
import {isUndefined} from "util";

@Component({
    selector: 'app-task',
    providers: [ProjectService, EpicService, DateUtilService, StoryService, TaskService, NgbModal],
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

    projects: Project[];
    errorMessage: string;
    selectedProject: Project;
    selectedEpic: Epic;
    epics: Epic[];
    modal: NgbModalRef;
    selectedStory: Story;
    stories: Story[];
    task: Task;
    tasks: Task[];

    constructor(private projectService: ProjectService, private epicService: EpicService, private storyService: StoryService, private taskService: TaskService, private dateUtilService: DateUtilService, private modalService: NgbModal) {
    }

    getProjects(): void {
        this.projectService.getProjects().subscribe(
            projects => this.projects = projects,
            error => this.errorMessage = <any> error
        );
    }

    createTask(): void {
        this.taskService.processDates(this.task, this.dateUtilService);
        this.taskService.createTask(this.task, this.task.story.storyID).subscribe(
            tasks => this.tasks = tasks,
            error => this.errorMessage = <any> error
        );
        this.closeModal("Epic info saved");
    }

    updateTask(): void {
        this.taskService.processDates(this.task, this.dateUtilService);
        this.taskService.updateTask(this.task, this.task.story.storyID).subscribe(
            tasks => this.tasks = tasks,
            error => this.errorMessage = <any> error
        );
        this.closeModal("project info saved")
    }

    ngOnInit() {
        this.getProjects();
    }

    open(content, task) {

        if (task != null) {
            this.task = Object.assign({}, task);
            this.task.story = (this.selectedStory === undefined) ? new Story() : this.selectedStory;
            this.task.story.epic = (this.selectedEpic === undefined) ? new Epic() : this.selectedEpic;
            this.task.story.epic.project = this.selectedProject;
            this.task.startDate = this.dateUtilService.transformUIDate(this.task.startDate);
            this.task.actualStartDate = this.dateUtilService.transformUIDate(this.task.actualStartDate);
            this.task.endDate = this.dateUtilService.transformUIDate(this.task.endDate);
            this.task.actualEndDate = this.dateUtilService.transformUIDate(this.task.actualEndDate);
        } else {
            this.task = new Task();
            this.task.story = (this.selectedStory === undefined) ? new Story() : this.selectedStory;
            this.task.story.epic = (this.selectedEpic === undefined) ? new Epic() : this.selectedEpic;
            this.task.story.epic.project = this.selectedProject;
        }

        // Open Modal
        this.modal = this.modalService.open(content);
    }

    onProjectChange(): void {
        this.epics = [];
        this.stories = [];
        this.tasks = [];

        var projectID = (isUndefined(this.selectedProject)) ? this.task.story.epic.project.projectID : this.selectedProject.projectID;

        this.epicService.getAllEpic(projectID).subscribe(
            epics => this.epics = epics,
            error => this.errorMessage = <any> error
        );
    }

    onEpicChange(): void {
        this.stories = [];
        this.tasks = [];

        this.storyService.getAllStories(this.selectedEpic.epicID).subscribe(
            stories => this.stories = stories,
            error => this.errorMessage = <any> error
        );
    }

    onStoryChange(): void {
        this.tasks = [];

        this.taskService.getAllStories(this.selectedStory.storyID).subscribe(
            tasks => this.tasks = tasks,
            error => this.errorMessage = <any> error
        );
    }

    closeModal(reason: any) {
        this.modal.dismiss(reason);
    }
}
