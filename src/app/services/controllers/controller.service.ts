import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from '../apis/api.service';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(private apiservice: ApiService) { }

  private userDataSource = new Subject<any>();
  userData$ = this.userDataSource.asObservable();

  getUserData = () => {
    this.apiservice.fetchData().then((res: any) => {
      this.userDataSource.next(res)
    })
  };
}
