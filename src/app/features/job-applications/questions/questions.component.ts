import { Component, Input } from '@angular/core';
import { sharedImports } from '../../../shared/shared-imports';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {

   @Input() Id?: any; // Optional

    displayedColumns: string[] = [
      'SlNO', 'question', 'Topic'];
  dataSource = []

}
