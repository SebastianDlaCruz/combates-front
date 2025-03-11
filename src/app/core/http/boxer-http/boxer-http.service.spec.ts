import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { Boxer } from '@core/models/boxer.model';
import { getStateError } from '@shared/utils/getStateError.util';
import { getStateSuccess } from '@shared/utils/getStateSuccess.util';
import { BoxerHttpService } from './boxer-http.service';

describe('BoxerHttpService', () => {
  let service: BoxerHttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        providers: [provideHttpClient(), provideHttpClientTesting()]

      });

    service = TestBed.inject(BoxerHttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all boxer', () => {

    const mockData = getStateSuccess({
      data: [{
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
    })


    const response = service.getAll<Boxer[]>();

    response.subscribe({
      next: (response) => {
        expect(response).toEqual(mockData);
      }
    })

    const req = httpTestingController.expectOne('/boxer');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);

  });


  it('should error get all boxer', () => {


    const mockDataError = getStateError();

    const response = service.getAll();

    response.subscribe({
      error: (err) => {
        expect(err).toEqual(mockDataError);
      }
    });

    const req = httpTestingController.expectOne('/boxer');

    req.flush(mockDataError)
  });


  it('should return pagination all boxer by ', () => {


    const mockDataPagination = getStateSuccess({
      pagination: {
        currentPage: 1,
        data: [
          {
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
          }
        ],
        next: null,
        pageSize: 1,
        total: 1,
        totalPages: 1,
        prev: null
      }
    })

    const response = service.getAll('1', '1');

    response.subscribe({
      next: (boxers) => {
        expect(boxers).toEqual(mockDataPagination);
      }
    });

    const req = httpTestingController.expectOne('/boxer?page=1&pageSize=1');
    expect(req.request.method).toBe('GET');

    req.flush(mockDataPagination);

  });


  it('should create boxer', () => {
    const mockBody: Boxer = {
      age: 22,
      corner: 'rojo',
      details: '',
      disability: '',
      fights: 2,
      gender: '',
      id_category: 2,
      id_coach: 1,
      id_school: 1,
      id_state: 1,
      name: 'Sebastian',
      weight: 21.2,
    };


    const requestResponse = {
      statusCode: 201,
      message: 'Éxito',
      success: true
    };

    const response = service.create(mockBody);

    response.subscribe(
      {
        next: (res) => {
          expect(res).toEqual(requestResponse);
        }
      }
    );

    const req = httpTestingController.expectOne('/boxer');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockBody);

    req.flush(requestResponse)
  });


  it('should update data boxer', () => {
    const mockBody: Boxer = {
      age: 22,
      corner: 'azul',
      details: '',
      disability: '',
      fights: 2,
      gender: '',
      id_category: 2,
      id_coach: 1,
      id_school: 1,
      id_state: 1,
      name: 'Sebastian',
      weight: 21.2,
    };

    const mockResponse = getStateSuccess<void>();

    service.update('1', mockBody).subscribe({
      next: (res) => {
        expect(res).toEqual(mockResponse);
      }
    });

    const req = httpTestingController.expectOne('/boxer/1');
    expect(req.request.method).toBe('PATCH');
    expect(req.request.body).toEqual(mockBody);
    req.flush(mockResponse);

  });

  it('should update data boxer error', () => {
    const mockBody: Boxer = {
      age: 22,
      corner: 'azul',
      details: '',
      disability: '',
      fights: 2,
      gender: '',
      id_category: 2,
      id_coach: 1,
      id_school: 1,
      id_state: 1,
      name: 'Sebastian',
      weight: 21.2,
    };

    const mockResponse = getStateError<void>();

    service.update('1', mockBody).subscribe({
      next: (res) => {
        expect(res).toEqual(mockResponse);
      }
    });

    const req = httpTestingController.expectOne('/boxer/1');
    expect(req.request.method).toBe('PATCH');
    expect(req.request.body).toEqual(mockBody);
    req.flush(mockResponse);

  });

  it('should update data boxer error body ', () => {
    const mockBody = {
      age: '22',
      corner: 'azul',
      details: '',
      disability: '',
      fights: 2,
      gender: '',
      id_category: 2,
      id_coach: 1,
      id_school: 1,
      id_state: 1,
      name: 'Sebastian',
      weight: 21.2,
    };

    const mockResponse = {
      error: {
        age: {
          'required_error': 'La edad  es requerida'
        }
      }
    };

    service.update('1', mockBody).subscribe({
      error: (res) => {
        expect(res).toEqual(mockResponse);
      }
    });

    const req = httpTestingController.expectOne('/boxer/1');
    expect(req.request.method).toBe('PATCH');
    expect(req.request.body).toEqual(mockBody);
    req.flush(mockResponse);

  });

  it('should delete boxer', () => {

    const mockResponse = getStateSuccess<void>();

    service.delete('1').subscribe({
      next: (res) => {
        expect(res).toEqual(mockResponse);
      }
    });

    const req = httpTestingController.expectOne('/boxer/1');
    expect(req.request.method).toBe('DELETE');

    req.flush(mockResponse);
  });

  it('should update state boxer by id', () => {

    const mockResponse = getStateSuccess<void>();

    const mockBody = {
      state: 1
    }

    service.updateState('1', mockBody).subscribe({
      next: (res) => {
        expect(res).toEqual(mockResponse);
      }
    });

    const req = httpTestingController.expectOne('/boxer/1');

    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(mockBody);

    req.flush(mockResponse);

  })

});
