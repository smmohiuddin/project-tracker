import {Component, OnInit} from '@angular/core';
import {Resource} from "../../shared/models/index";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ResourceService} from "../../shared/services/index";

@Component({
    selector: 'app-resource',
    providers: [ResourceService],
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

    resource: Resource;
    resources: Resource[];
    modal: NgbModalRef;
    errorMessage: string;

    constructor(private resourceService: ResourceService, private modalService: NgbModal) {}

    open(content, resource) {

        // Transforming  Date to UI bootstrap date
        if (resource != null) {
            /*this.selectedProject = Object.assign({}, project);
             this.selectedProject.startDate = this.dateUtilService.transformUIDate(this.selectedProject.startDate);
             this.selectedProject.actualStartDate = this.dateUtilService.transformUIDate(this.selectedProject.actualStartDate);
             this.selectedProject.endDate = this.dateUtilService.transformUIDate(this.selectedProject.endDate);
             this.selectedProject.actualEndDate = this.dateUtilService.transformUIDate(this.selectedProject.actualEndDate);*/
        } else {
            this.resource = new Resource();
        }

        // Open Modal
        this.modal = this.modalService.open(content);
    };

    createResource(): void {
        this.resourceService.createResource(this.resource).subscribe(
            resources => this.resources = resources,
            error => this.errorMessage = <any> error
        );

        this.closeModal("Resource info saved")
    };

    ngOnInit() {
    }

    closeModal(reason: any) {
        this.modal.dismiss(reason);
    }
}
