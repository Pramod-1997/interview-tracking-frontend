import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpoints } from '../../constants/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

   constructor(private http: HttpClient) {
    
     }
  
       getAll() {
      return this.http.get(ApiEndpoints.company.getAll, {observe:'response'} );
    }

    addCompany(payload:any){
      return this.http.post(ApiEndpoints.company.addCompany,payload, {observe:'response'} );
    }

    getCompanyEmp(payload:any){
    const params = new HttpParams()
       .set('companyId',payload)
      return this.http.get(ApiEndpoints.company.getCompanyEmp, {params,observe:'response'} );
    }
}
