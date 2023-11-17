import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressCircleComponent } from '../progress-circle/progress-circle.component';

@Component({
    selector: 'app-online-status',
    standalone: true,
    imports: [CommonModule, ProgressCircleComponent],
    templateUrl: './online-status.component.html',
    styleUrl: './online-status.component.scss'
})
export class OnlineStatusComponent {

    lastUpdateTimestamp!: number;
    lastUpdateLabel!: string;
    remainingSeconds!: number;
    @Input() set lastUpdate(timestamp: number) {
        this.lastUpdateTimestamp = 1000 * timestamp;
        this.updateStatus();
    }
    @Input() set remainingTimeForUpdate(value: number) {
        this.remainingSeconds = value
        this.updateStatus();
    };
    isOnline = false;
    treshold = 300; // sec
    progress = 0;
    max = 15;

    updateStatus(): void {
        const difference = Date.now() - this.lastUpdateTimestamp;
        this.isOnline = difference < this.treshold * 1000;
        this.progress = Math.floor((this.max - this.remainingSeconds) / this.max * 100);
        this.lastUpdateLabel = new Date(this.lastUpdateTimestamp).toLocaleDateString() + " " + new Date(this.lastUpdateTimestamp).toLocaleTimeString();
    }

}
