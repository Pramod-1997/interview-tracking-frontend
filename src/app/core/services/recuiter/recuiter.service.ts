import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoints } from '../../constants/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class RecuiterService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(ApiEndpoints.recuiter.getAll, {observe:'response'} );
  }


  
}
