import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {HttpHeaders, HttpClient} from '@angular/common/http';

import {ListItemsMeliResponseDto} from '../dtos/list-items-meli-response/list-items-meli-response.dto';
import {environment} from '../../environments/environment';
import {SearchResult} from '../models/search-result';
import {ServiceError} from './service-error';
import {Item} from "../models/item";
import {ItemWithDescriptionMeliResponseDto} from "../dtos/item-with-description-response/item-with-description-meli-response.dto";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getItems(query: string): Observable<SearchResult> {

    const url = `${this.baseUrl}/items?q=${query}`;
    const httpOptions = {headers: new HttpHeaders().set('Accept', 'application/json')};

    return this.http.get<any>(url, httpOptions)
      .pipe(map(response => {
          if (response.statusCode === 204) {
            console.log(response);
          } else {
            return ListItemsMeliResponseDto.convertToDomain(response);
          }
        }),
        catchError(
          err => {
            switch (err.key) {
              case 400: {
                return throwError(new ServiceError('examen-tecnico-api-400', 'Ocurrio un error al intentar consultar la api.'));
              }
              case 500: {
                return throwError(new ServiceError('examen-tecnico-api-500', 'Ocurrió un error en el servidor'));
              }
              default: {
                return throwError(new ServiceError('examen-tecnico-api-generico', 'Ocurrió un error'));
              }
            }
          }
        ));
  }

  getItemWithDescription(id: string): Observable<Item> {

    const url = `${this.baseUrl}/items/${id}`;
    const httpOptions = {headers: new HttpHeaders().set('Accept', 'application/json')};

    return this.http.get<ItemWithDescriptionMeliResponseDto>(url, httpOptions)
      .pipe(map(response => {
          return ItemWithDescriptionMeliResponseDto.convertToDomain(response);
        }),
        catchError(
          err => {
            switch (err.key) {
              case 400: {
                return throwError(new ServiceError('examen-tecnico-api-400', 'Ocurrio un error al intentar consultar la api.'));
              }
              case 500: {
                return throwError(new ServiceError('examen-tecnico-api-500', 'Ocurrió un error en el servidor'));
              }
              default: {
                return throwError(new ServiceError('examen-tecnico-api-generico', 'Ocurrió un error'));
              }
            }
          }
        ));
  }
}
