import { Component, inject, OnInit } from '@angular/core';
import { sharedImports } from '../../../shared/shared-imports';
import { AddjobComponent } from '../addjob/addjob.component';
import { MatDialog } from '@angular/material/dialog';
import { JobapService } from '../../../core/services/jobAp/jobap.service';

@Component({
  selector: 'app-joblist',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './joblist.component.html',
  styleUrl: './joblist.component.scss'
})
export class JoblistComponent implements OnInit {

   readonly dialog = inject(MatDialog);

    displayedColumns: string[] = [
      // 'SlNO',
       'Company', 'Position', 'salary', 'Status',
    //  "note","JD",  "recuiter","employee",
      "Date","action"];
  dataSource:any = []

   constructor(private jobapService:JobapService){
    
      }
    
      ngOnInit(): void {
        this.getAll();
      }


     openDialog(): void {
      const dialogRef = this.dialog.open(AddjobComponent, {
      width: '900px',
      });
  
      dialogRef.afterClosed().subscribe((result:any) => {
      console.log(result);
      
      });
    }

   
    
    
    
      getAll(){
        this.jobapService.getAll().subscribe({
          next: (resp)=>{
    this.dataSource =resp.body;
          },
           error: (err) => console.error('Request failed:', err),
          complete: () => console.log('Request complete')
        })
      }


}
