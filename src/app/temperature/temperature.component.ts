import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Type } from './type';

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.scss'
})
export class TemperatureComponent {

    @Input() value!: number;
    @Input() type!: Type;
    @Input() unit!: string;
    Type = Type;

}
