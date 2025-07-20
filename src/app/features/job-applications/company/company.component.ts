import { Component, inject, OnInit } from '@angular/core';
import { sharedImports } from '../../../shared/shared-imports';
import { JobapService } from '../../../core/services/jobAp/jobap.service';
import { CompanyService } from '../../../core/services/company/company.service';
import { AddcompanyComponent } from '../addcompany/addcompany.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent implements OnInit {
 readonly dialog = inject(MatDialog);
   displayedColumns: string[] = [
      // 'SlNO',
       'Company', 'location', 'industry',"action"];
  dataSource :any= []

  constructor(private companyService:CompanyService){

  }

  ngOnInit(): void {
    this.getAll();
  }



  getAll(){
    this.companyService.getAll().subscribe({
      next: (resp)=>{
this.dataSource =resp.body;
      },
       error: (err) => console.error('Request failed:', err),
      complete: () => console.log('Request complete')
    })
  }

    openDialog(): void {
      const dialogRef = this.dialog.open(AddcompanyComponent, {
      width: '900px',
      });
  
      dialogRef.afterClosed().subscribe((result:any) => {
        if(result){
          this.getAll();
        }
      console.log(result);
      
      });
    }

    openWebsite(url: string) {
  window.open(url, '_blank');
}

}
