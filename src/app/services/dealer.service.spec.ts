import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DealerService } from './dealer.service';
import { AppConfigModule } from '../config';
import { IDealer } from '../models';


describe('DealerService', () => {

  let service: DealerService;
  let httpMock: HttpTestingController;
  const dealers: IDealer[] = [
    {
      name: 'REP 1',
      address1: '30900 Rancho Viejo Rd. Suite 100',
      address2: '',
      city: 'San Juan Capistrano',
      stateCode: 'CA',
      zip: 92675,
      phone: '(949) 443-9655',
      fax: '(949) 443-9655',
      email: 'randy@desreps.com',
      contact: 'Randy Phelan',
      website: 'www.desreps.com',
      linkText: 'www.desreps.com',
      isRep: true,
      created: '',
      modified: '2015-08-26 19:47:28'
    },
    {
      name: 'DEALER 1',
      address1: '25567 Seaboard Lane',
      address2: '',
      city: 'Hayward',
      stateCode: 'CA',
      zip: 94545,
      phone: '(510)786-3536',
      fax: '(510)786-3536',
      email: 'ron@pmareps.com',
      contact: 'Ron Leavy',
      website: 'www.pmareps.com',
      linkText: 'www.pmareps.com',
      isRep: false,
      created: '',
      modified: '2015-08-27 16:51:01'
    },
    {
      name: 'REP 2',
      address1: '30900 Rancho Viejo Rd. Suite 100',
      address2: '',
      city: 'San Juan Capistrano',
      stateCode: 'AK',
      zip: 92675,
      phone: '(949) 443-9655',
      fax: '(949) 443-9655',
      email: 'randy@desreps.com',
      contact: 'Randy Phelan',
      website: 'www.desreps.com',
      linkText: 'www.desreps.com',
      isRep: true,
      created: '',
      modified: '2015-08-26 19:47:28'
    },
    {
      name: 'DEALER 2',
      address1: '25567 Seaboard Lane',
      address2: '',
      city: 'Hayward',
      stateCode: 'AK',
      zip: 94545,
      phone: '(510)786-3536',
      fax: '(510)786-3536',
      email: 'ron@pmareps.com',
      contact: 'Ron Leavy',
      website: 'www.pmareps.com',
      linkText: 'www.pmareps.com',
      isRep: false,
      created: '',
      modified: '2015-08-27 16:51:01'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppConfigModule,
      ],
      providers: [DealerService]
    });

    service = TestBed.get(DealerService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get dealers', (done) => {
    const expected = dealers.filter(d => d.isRep === false);
    service.getDealers()
      .subscribe(res => {
        expect(res).toEqual(expected);
        done();
      });

    const request = httpMock.expectOne('https://s3-us-west-1.amazonaws.com/data.blendtec.com/dealers.json');
    request.flush(dealers);


    httpMock.verify();
  });

  it('should get reps', (done) => {
    const expected = dealers.filter(d => d.isRep === true);
    service.getReps()
      .subscribe(res => {
        expect(res).toEqual(expected);
        done();
      });

    const request = httpMock.expectOne('https://s3-us-west-1.amazonaws.com/data.blendtec.com/dealers.json');
    request.flush(dealers);


    httpMock.verify();
  });
});


