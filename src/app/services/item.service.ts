import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {HttpHeaders, HttpClient} from '@angular/common/http';

import {ListItemsMeliResponseDto} from '../dtos/list-items-meli-response/list-items-meli-response.dto';
import {environment} from '../../environments/environment';
import {SearchResult} from '../models/search-result';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<SearchResult> {

    const url = `${this.baseUrl}/items?q=fiat uno 2002`;
    const httpOptions = {headers: new HttpHeaders().set('Accept', 'application/json')};

    return this.http.get<ListItemsMeliResponseDto>(url, httpOptions)
      .pipe(map(response => {


        return null;
      }));
  }
}
