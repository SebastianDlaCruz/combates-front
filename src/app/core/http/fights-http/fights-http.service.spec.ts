import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Fights, FightsResponse } from '@core/models/fights.model';
import { getStateSuccess } from '@shared/utils/getStateSuccess.util';
import { FightsHttpService } from './fights-http.service';

describe('FightsHttpService', () => {
  let service: FightsHttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(), provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(FightsHttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all fights', () => {

    const mockAll = getStateSuccess<FightsResponse>({
      data: {
        idClashes: 1,
        boxers: [{
          age: 22,
          corner: 'rojo',
          details: '',
          disability: '',
          fights: 2,
          gender: '',
          id: '221',
          id_category: 2,
          id_coach: 1,
          id_school: 1,
          id_state: 1,
          name: 'Sebastian',
          weight: 21.2,
        }]
      }
    });

    service.getAll<FightsResponse>().subscribe({
      next: (res) => {
        expect(res).toBe(mockAll);
      }
    });

    const req = httpTestingController.expectOne('/clashes');
    expect(req.request.method).toBe('GET');

    req.flush(mockAll);

  });

  it('should get all pagination ', () => {

    const mockAll = getStateSuccess<FightsResponse[]>({
      pagination: {
        currentPage: 1,
        data: [{
          idClashes: 1,
          boxers: [{
            age: 22,
            corner: 'rojo',
            details: '',
            disability: '',
            fights: 2,
            gender: '',
            id: '221',
            id_category: 2,
            id_coach: 1,
            id_school: 1,
            id_state: 1,
            name: 'Sebastian',
            weight: 21.2,
          }]
        }
        ],
        next: null,
        pageSize: 1,
        total: 1,
        totalPages: 1,
        prev: null
      }
    });

    service.getAll('1', '1').subscribe({
      next: (res) => {
        expect(res).toEqual(mockAll)
      }
    });

    const req = httpTestingController.expectOne('/clashes?page=1&pageSize=1');

    expect(req.request.method).toBe('GET');

    req.flush(mockAll);

  });

  it('should create', () => {

    const mockResponse = getStateSuccess({ statusCode: 201 });

    const bodyMock: Fights = {
      id: 1,
      id_boxer_one: '1',
      id_boxer_two: '2',
      id_category: 1,
      id_state: 1,
      id_type_clashes: 1,
      number_clashes: 2,
      rounds: 2,
    };

    service.create<Fights>(bodyMock);
    const req = httpTestingController.expectOne('/clashes');

    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(bodyMock);

    req.flush(mockResponse);
  });

  it('should update', () => {

    const mockResponse = getStateSuccess();
    const bodyMock: Fights = {
      id: 1,
      id_boxer_one: '1',
      id_boxer_two: '2',
      id_category: 1,
      id_state: 1,
      id_type_clashes: 1,
      number_clashes: 2,
      rounds: 4,
    };

    service.update<Fights>(1, bodyMock);

    const req = httpTestingController.expectOne('/clashes');

    expect(req.request.method).toBe('PATCH');
    expect(req.request.body).toEqual(bodyMock);

    req.flush(mockResponse);
  });

  it('should delete', () => {
    const mockResponse = getStateSuccess();
    service.delete(1);
    const req = httpTestingController.expectOne('/clashes');
    expect(req.request.method).toBe('DELETE');
    req.flush(mockResponse);
  });

});
