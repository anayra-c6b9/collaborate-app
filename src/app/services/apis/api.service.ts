import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }

  fetchData = async (): Promise<any> => {
    const userData$ = this.http.get<any>(environment.api_host + environment.get_cards)
    return await lastValueFrom<any>(userData$)
  }
}
