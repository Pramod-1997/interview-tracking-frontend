import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpoints } from '../../constants/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class JobapService {

  constructor(private http: HttpClient) {
  
   }

     getAll() {
    return this.http.get(ApiEndpoints.job.getAll, {observe:'response'} );
  }

  getJobbyId(jobId:any) {
    return this.http.get(`${ApiEndpoints.job.getAll}/${jobId}`, {observe:'response'} );
  }
}
