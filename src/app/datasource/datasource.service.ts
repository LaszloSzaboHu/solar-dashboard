import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SensorData } from './sensorData';
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DatasourceService {

    HOST = "http://localhost:8282";
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };

    constructor(private readonly httpClient: HttpClient) { }

    getCurrent(): Promise<SensorData> {
        return lastValueFrom(
            this.httpClient.get<SensorData>(`${this.HOST}/getCurrent.php`, this.httpOptions)
        );
    }
}
