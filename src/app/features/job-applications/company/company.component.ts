import { Component } from '@angular/core';
import { sharedImports } from '../../../shared/shared-imports';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {

   displayedColumns: string[] = [
      'SlNO', 'Company', 'location', 'industry',"action"];
  dataSource = []

}
