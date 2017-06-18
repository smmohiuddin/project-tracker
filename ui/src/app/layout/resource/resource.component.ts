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

    constructor(private resourceService: ResourceService, private modalService: NgbModal) {
    }

    open(content, resource) {
        if (resource != null) {
            this.resource = Object.assign({}, resource);
        } else {
            this.resource = new Resource();
        }

        // Open Modal
        this.modal = this.modalService.open(content);
    };

    getResources(): void {
        this.resourceService.getResources().subscribe(
            resources => this.resources = resources,
            error => this.errorMessage = <any> error
        );
    }

    createResource(): void {
        this.resourceService.createResource(this.resource).subscribe(
            resources => this.resources = resources,
            error => this.errorMessage = <any> error
        );

        this.closeModal("Resource info saved")
    };

    updateResource(): void {
        this.resourceService.updateResource(this.resource).subscribe(
            resources => this.resources = resources,
            error => this.errorMessage = <any> error
        );

        this.closeModal("Resource info updated")
    };

    ngOnInit() {
        this.getResources();
    }

    closeModal(reason: any) {
        this.modal.dismiss(reason);
    }
}
