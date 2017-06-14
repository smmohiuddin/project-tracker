import {Component, OnInit} from '@angular/core';
import {Project} from "../../shared/models/project";
import {ProjectService} from "../../shared/services/index";

@Component({
    selector: 'app-epic',
    providers: [ProjectService],
    templateUrl: './epic.component.html',
    styleUrls: ['./epic.component.scss']
})
export class EpicComponent implements OnInit {

    errorMessage: string = "";
    projects: Project[] = [];

    constructor(private projectService: ProjectService) {}

    getProjects() : void {
        this.projectService.getProjects().subscribe(
            projects => this.projects = projects,
            error => this.errorMessage = <any> error
        );
    }

    ngOnInit() {
        this.getProjects();
    }

}
