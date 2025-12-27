import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private http = inject(HttpClient);

  constructor() {}

  public getClimas(): Observable<any> {
    return this.http.get('/api/weather/');
  }
}
