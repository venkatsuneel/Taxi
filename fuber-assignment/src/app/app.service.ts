import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const GET_CAB_LOCATION: string = '/cab/location';
const UPDATE_CUSTOMER_LOCATION: string = '/cust/location';
// GET_FARE:'/fare'
@Injectable()
export class FuberService {

  constructor(private http: HttpClient) { }

  getCabLocation(): Observable<any> {
    return this.http.get(GET_CAB_LOCATION);
  }

  updateLocation(location): Observable<any> {
      return this.http.put(UPDATE_CUSTOMER_LOCATION, location);
  }
}