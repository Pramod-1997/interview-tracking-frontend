import { Component } from '@angular/core';
import { sharedImports } from './shared/shared-imports';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'interview-tracking-ui';
}
