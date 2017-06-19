import {TestBed, inject} from '@angular/core/testing';

import {ProjectResourceService} from './project-resource.service';

describe('ProjectResourceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProjectResourceService]
        });
    });

    it('should be created', inject([ProjectResourceService], (service: ProjectResourceService) => {
        expect(service).toBeTruthy();
    }));
});
