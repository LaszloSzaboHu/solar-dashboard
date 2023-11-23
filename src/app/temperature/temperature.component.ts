import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.scss'
})
export class TemperatureComponent {

    @Input() value!: number;

}
