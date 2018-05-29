// import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FuberService } from './app.service';


describe('Fuber Service', () => {

    let fuberService: FuberService;

    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [FuberService]
        });

        // Inject the http service and test controller for each test
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    it('create device service object', () => {
        expect(FuberService.getCabLocation).toBeDefined();
        expect(FuberService.updateLocation).toBeDefined();
    });


    it('verify getCabLocation', () => {
        fuberService.getCabLocation().subscribe(
            data => {
                expect(data).toBeDefined();
                expect(data['location']).toEqual('get devices success response');
            }
        );

        const req = httpTestingController.expectOne('/cab/location');
        expect(req.request.method).toEqual('GET');
        req.flush({ 'test': 'get devices success response' });
    });

   

    it('verify updateLocation', () => {
        let mockDeviceData = {
            perviousLoc: 'pervloc',
            currentLoc: 'currentloc'
        };
        fuberService.updateLocation('currentLoc').subscribe(
            data => {
                expect(data).toBeDefined();
                expect(data.test).toEqual('update location success response');
            }
        );

        const req = httpTestingController.expectOne('/cust/location');
        expect(req.request.method).toEqual('PUT');
        expect(req.request.body.location).toEqual('currentLoc');
        req.flush({ 'currentLoc': 'update device success response' });
    });

        
});
