import { Component } from '@angular/core';
import { ControllerService } from './services/controllers/controller.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private controllerservice: ControllerService) {
    this.userDataSubscription = this.controllerservice.userData$.subscribe(
      (data) => {
        this.userData = data;
      }
    );
  }

  userDataSubscription: Subscription;

  userData:any = {}

  getUserData = () => {
    this.controllerservice.getUserData()
  }
}
