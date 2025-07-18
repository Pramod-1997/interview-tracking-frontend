import { Component, Input, OnInit } from '@angular/core';
import { sharedImports } from '../../../shared/shared-imports';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss'
})
export class ConversationComponent implements OnInit {

   @Input() Id?: any; // Optional

   displayedColumns: string[] = [
      'SlNO', 'Date', 'Type', 'Message', 'Action','nextstep'];
  dataSource = []

    ngOnInit() {
    if (this.Id) {
      
    } else {

    }
  }

}
