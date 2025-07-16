import { Component } from '@angular/core';
import { sharedImports } from '../../../shared/shared-imports';

@Component({
  selector: 'app-joblist',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './joblist.component.html',
  styleUrl: './joblist.component.scss'
})
export class JoblistComponent {

    displayedColumns: string[] = [
      'SlNO', 'Company', 'Position', 'salary', 'Status',
    //  "note","JD",  "recuiter","employee",
      "Date","action"];
  dataSource = []

}
