import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-circle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-circle.component.html',
  styleUrl: './progress-circle.component.scss'
})
export class ProgressCircleComponent {
    @Input() progress = 0;
    @Input() remainingSeconds = 0;
}
