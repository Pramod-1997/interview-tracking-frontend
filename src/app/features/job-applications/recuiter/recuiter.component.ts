import { Component, inject, OnInit } from '@angular/core';
import { sharedImports } from '../../../shared/shared-imports';
import { JobapService } from '../../../core/services/jobAp/jobap.service';
import { CompanyService } from '../../../core/services/company/company.service';
import { AddcompanyComponent } from '../addcompany/addcompany.component';
import { MatDialog } from '@angular/material/dialog';
import { RecuiterService } from '../../../core/services/recuiter/recuiter.service';

@Component({
  selector: 'app-recuiter',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './recuiter.component.html',
  styleUrl: './recuiter.component.scss'
})
export class RecuiterComponent {

   readonly dialog = inject(MatDialog);
     displayedColumns: string[] = [
        // 'SlNO',
         'Company', 'location', 'industry',"linkedin","action"];
    dataSource :any= []
  
    constructor(private recuiterService:RecuiterService){
  
    }
  
    ngOnInit(): void {
      this.getAll();
    }
  
  
  
    getAll(){
      this.recuiterService.getAll().subscribe({
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
