import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DatasourceService } from './datasource/datasource.service';
import { OnlineStatusComponent } from './online-status/online-status.component';
import { SensorData } from './datasource/sensorData';
import { TemperatureComponent } from './temperature/temperature.component';
import { Type } from './temperature/type';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, OnlineStatusComponent, TemperatureComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'solar-dashboard';
    latestData!: SensorData;
    lastUpdate = 0;
    updateInterval = 15;
    remainingTimeForUpdate = this.updateInterval;
    Type = Type;

    constructor(private readonly datasourceService: DatasourceService) {
        this.loadCurrentData();
        this.counter();
    }

    counter() {
        if (this.remainingTimeForUpdate == 0) {
            this.remainingTimeForUpdate = this.updateInterval;
            this.loadCurrentData();
            this.counter();
        } else {

            setTimeout(() => {
                this.remainingTimeForUpdate--;
                this.counter();
            }, 1000);
        }
    }

    loadCurrentData() {
        this.datasourceService.getCurrent().then((sensorData: SensorData) => {
            this.latestData = sensorData;
            this.lastUpdate = sensorData.timestamp;
        });
    }

    statusClicked() {
        this.loadCurrentData();
        this.remainingTimeForUpdate = this.updateInterval;
    }
}
